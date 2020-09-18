// Interfaces
import ModelInterface from "../interfaces/ModelInterface"
import Model from "../models/Model"

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
  protected related: ModelInterface[]

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

    } else { // If data is model
      this.data = this.getModelSchema(data)
    }

    return this
  }

  /**
   * Set document related data
   * @param {ModelInterface | ModelInterface[]} data
   * @return {Document} this
   */
  setRelated(data: ModelInterface | ModelInterface[]): Document {
    this.related = (Array.isArray(data) ? data : [data]).map(model => this.getModelSchema(model, false))
    return this
  }

  /**
   * Add data to related
   * @param {ModelInterface | ModelInterface[]} data
   * @return {Document} this
   */
  addRelated(data: ModelInterface | ModelInterface[]): Document {

    // Convert data to array if a resource injected
    if (!Array.isArray(data)) {
      data = [data]
    }

    // Add to related
    data.forEach(model => {

      // Skip if existed
      if (this.related.find(m => m.type === model.type && m.id === model.id)) {
        return
      }

      this.related.push(this.getModelSchema(model, false))

    })

    return this
  }

  /**
   * Compile document to json
   * @return {Object}
   */
  compile(): Object {
    return {
      data: this.data,
      related: this.related
    }
  }

  /**
   * Get model schema
   * @param {ModelInterface}
   * @return {Object}
   */
  protected getModelSchema(model: ModelInterface, addRelationshipDataToRelated: boolean = true) {

    const modelSchema = this.schemaMap[model.type](model)

    // If has relationship
    if (addRelationshipDataToRelated && modelSchema.hasOwnProperty('relationships')) {
      for (let relationshipKey in modelSchema.relationships) {
        this.addRelated(modelSchema.relationships[relationshipKey])
      }
    }

    return modelSchema

  }
}
