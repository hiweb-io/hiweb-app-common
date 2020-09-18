import ModelInterface from "../../interfaces/ModelInterface"

/**
 * This fucking check if all models in array are the same type
 * @param {ModelInterface[]} models
 */
export default (models: ModelInterface[]) => {

  let type
  return models.every(model => {

    // Type is null - assign first value
    if (!type) {
      type = model.type
      return true
    }

    // Check type
    return model.type === type

  })
}
