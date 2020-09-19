// Interfaces
import ModelInterface from "../interfaces/ModelInterface"
import Model from "../models/Model"
import SchemaInterface from '../interfaces/SchemaInterface'

// Schemas
import todoListSchema from "../schemas/todoListSchema"
import todoSchema from "../schemas/todoSchema"

// Checks
import sameModelTypeCheck from "./checks/sameModelTypeCheck"

export default class Document {

  /**
   * Document primary data
   */
  protected data: ModelInterface | ModelInterface[]

  /**
   * Document related data
   */
  protected related: ModelInterface[] = []

  /**
   * Document meta
   */
  protected meta: {[key: string]: any} = {}

  /**
   * Document errors
   */
  protected errors: { title: string, text?: string, code?: string}[]

  /**
   * Schema map (model type => schema)
   */
  protected schemaMap = {

    // Example models
    todoLists: todoListSchema,
    todos: todoSchema
  }

  /**
   * Set document primary data
   * @param {ModelInterface | ModelInterface[]} data
   * @return {Document} this
   */
  setData(data: ModelInterface | ModelInterface[]): Document {

    // Throw error if errors set
    if (this.errors) {
      throw new Error('Cannot set data, document errors was set')
    }

    // If data is array
    if (Array.isArray(data)) {

      // If empty
      if (!data.length) {
        throw new Error('Document data array cannot be empty')
      }

      // Check valid type
      if (!sameModelTypeCheck(data)) {
        throw new Error('Document data array members must be the same type')
      }

      // Set data
      this.data = data.map(model => this.getModelSchema(model))

      // Auto add related resources
      this.data.forEach(modelSchema => {
        this.autoAddRelated(modelSchema)
      })

    } else { // If data is model

      // Set data
      const modelSchema = this.getModelSchema(data)
      this.data = modelSchema

      // Auto add related
      this.autoAddRelated(modelSchema)
    }

    return this
  }

  /**
   * Set document related data
   * @param {ModelInterface | ModelInterface[]} data
   * @return {Document} this
   */
  setRelated(data: ModelInterface | ModelInterface[]): Document {

    // Throw error if data was not set
    if (!this.data) {
      throw new Error('Cannot set related, document data was not set')
    }

    // Ensure data to be an array of models
    data = Array.isArray(data) ? data : [data]

    // Set related
    this.related = data.map(model => {
      
      // Get model schema
      const modelSchema = this.getModelSchema(model)

      // Auto add related
      this.autoAddRelated(modelSchema)

      return modelSchema
    })

    return this
  }

  /**
   * Add data to related
   * @param {ModelInterface | ModelInterface[]} data
   * @return {Document} this
   */
  addRelated(data: ModelInterface | ModelInterface[]): Document {

    // Throw error if data was not set
    if (!this.data) {
      throw new Error('Cannot set related, document data was not set')
    }

    // Ensure related data is array
    if (!Array.isArray(this.related)) {
      this.related = []
    }

    // Convert data to array if its a resource injected
    if (!Array.isArray(data)) {
      data = [data]
    }

    // Add to related
    data.forEach(model => {

      // Skip if existed in related
      if (this.related.find(m => m.type === model.type && m.id === model.id)) {
        return
      }

      // Skip if existed in data
      if (!Array.isArray(this.data) && this.data.type === model.type && this.data.id === model.id) {
        return
      } else if (Array.isArray(this.data) && this.data.find(m => m.type === model.type && m.id === model.id)) {
        return
      }

      // Get model schema
      const modelSchema = this.getModelSchema(model)
      this.related.push(modelSchema)
      
      // Auto add related
      this.autoAddRelated(modelSchema)

    })

    return this
  }

  /**
   * Set document meta
   * @param meta 
   */
  setMeta(meta: {[key: string]: any}): Document {
    this.meta = meta
    return this
  }

  /**
   * Add meta
   * @param meta 
   */
  addMeta(meta: {[key: string]: any}): Document {
    for (let key in meta) {
      this.meta[key] = meta[key]
    }
    return this
  }

  /**
   * Set errors
   * @param errors
   */
  setErrors(errors: { title: string, text?: string, code?: string}[]): Document {

    // Throw error if data set
    if (this.data) {
      throw new Error('Cannot set errors, document data was set')
    }

    this.errors = errors
    return this
  }

  /**
   * Compile document
   * @return {Object}
   */
  compile(): Object {

    const document: {[key: string]: any} = {}

    // Errors
    if (this.errors) {
      document.errors = this.errors
    }

    // Document data
    if (this.data) {
      document.data = Array.isArray(this.data) ? this.data.map(resourceSchema => this.compileResource(resourceSchema)) : this.compileResource(this.data)
    }

    // If related set
    if (this.related.length) {
      document.related = this.related.map(resourceSchema => this.compileResource(resourceSchema))
    }

    // If meta set
    if (Object.keys(this.meta).length) {
      document.meta = this.meta
    }

    return document
  }

  /**
   * Compile resource schema object
   */
  protected compileResource(resourceSchema: SchemaInterface): Object {

    // Define compiled resource
    const compiledResource: {[key: string]: any} = {}

    // Copy data from input
    for (let key in resourceSchema) {

      // If relationships
      if (key === 'relationships') {

        // If relationships set
        if (Object.keys(resourceSchema.relationships).length) {

          // Set compiled resource relationships
          compiledResource.relationships = {}

          // Scan relationships
          for (let relationshipKey in resourceSchema.relationships) {

            // Relationship data
            const relationshipData = resourceSchema.relationships[relationshipKey]

            // If relationship data is array
            if (Array.isArray(relationshipData)) {

              // Map to id and type only
              compiledResource.relationships[relationshipKey] = relationshipData.map(model => {
                return {
                  id: model.id,
                  type: model.type
                }
              })

            } else if (relationshipData instanceof Model) { // Is single resource

              // Set relationship with id and type only
              compiledResource.relationships[relationshipKey] = {
                id: relationshipData.id,
                type: relationshipData.type
              }
            }
          }
        }

        continue
      }

      compiledResource[key] = resourceSchema[key]
    }

    return compiledResource
  }

  /**
   * Get model schema
   * @param {ModelInterface}
   * @return {Object}
   */
  protected getModelSchema(model: ModelInterface) {
    return this.schemaMap[model.type](model)
  }

  /**
   * Automatically add related resources
   */
  protected autoAddRelated(modelSchema: SchemaInterface) {

    // If has relationship
    if (modelSchema.hasOwnProperty('relationships')) {
      for (let relationshipKey in modelSchema.relationships) {
        
        const relationshipData = modelSchema.relationships[relationshipKey]
        
        if (relationshipData) {
          this.addRelated(relationshipData)
        }
        
      }
    }

  }
}
