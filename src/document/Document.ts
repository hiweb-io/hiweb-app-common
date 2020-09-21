// Interfaces
import BaseEntity from "../entities/BaseEntity";

// Checks
import sameTypeCheck from "./checks/sameTypeCheck"

export default class Document {

  /**
   * Document primary data
   */
  protected data: BaseEntity | BaseEntity[]

  /**
   * Document related data
   */
  protected related: BaseEntity[] = []

  /**
   * Document meta
   */
  protected meta: {[key: string]: any} = {}

  /**
   * Document errors
   */
  protected errors: { title: string, text?: string, code?: string}[]

  /**
   * Set document primary data
   * @param {ModelInterface | ModelInterface[]} data
   * @return {Document} this
   */
  setData(data: BaseEntity | BaseEntity[]): Document {

    // Throw error if errors set
    if (this.errors) {
      throw new Error('Cannot set data, document errors was set')
    }

    // Set data
    this.data = data

    // If data is array
    if (Array.isArray(data)) {

      // If empty
      if (!data.length) {
        throw new Error('Document data array cannot be empty')
      }

      // Check valid type
      if (!sameTypeCheck(data)) {
        throw new Error('Document data array members must be the same type')
      }

      // Auto add related resources
      (<BaseEntity[]> this.data).forEach(entity => {
        this.autoAddRelated(entity)
      })

    } else { // If data is model

      // Auto add related
      this.autoAddRelated(<BaseEntity> this.data)
    }

    return this
  }

  /**
   * Set document related data
   * @param {ModelInterface | ModelInterface[]} data
   * @return {Document} this
   */
  setRelated(data: BaseEntity | BaseEntity[]): Document {

    // Throw error if data was not set
    if (!this.data) {
      throw new Error('Cannot set related, document data was not set')
    }

    // Ensure data to be an array of models
    data = Array.isArray(data) ? data : [data]

    // Set related
    this.related = data;
    data.forEach(entity => {

      // Auto add related
      this.autoAddRelated(entity)
    })

    return this
  }

  /**
   * Add data to related
   * @param {ModelInterface | ModelInterface[]} data
   * @return {Document} this
   */
  addRelated(data: BaseEntity | BaseEntity[]): Document {

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
    data.forEach(entity => {

      // Skip if existed in related
      if (this.related.find(m => m.type === entity.type && m.id === entity.id)) {
        return
      }

      // Skip if existed in data
      if (!Array.isArray(this.data) && this.data.type === entity.type && this.data.id === entity.id) {
        return
      } else if (Array.isArray(this.data) && this.data.find(m => m.type === entity.type && m.id === entity.id)) {
        return
      }

      // Get model schema
      this.related.push(entity)
      
      // Auto add related
      this.autoAddRelated(entity)

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
      document.data = Array.isArray(this.data) ? this.data.map(entity => this.compileEntity(entity)) : this.compileEntity(this.data)
    }

    // If related set
    if (this.related.length) {
      document.related = this.related.map(entity => this.compileEntity(entity))
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
  protected compileEntity(entity: BaseEntity): Object {
    return JSON.parse(entity.toJSON())
  }

  /**
   * Automatically add related resources
   */
  protected autoAddRelated(entity: BaseEntity) {

    // Get entity object
    const entityObject = entity.toObject()

    // If has relationship
    if (entityObject.hasOwnProperty('relationships')) {
      for (let relationshipKey in entityObject.relationships) {
        
        const relationshipData = entityObject.relationships[relationshipKey]
        
        if (relationshipData) {
          this.addRelated(relationshipData)
        }
        
      }
    }

  }
}
