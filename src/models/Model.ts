import str from '../helpers/str'

export default class Model {

  /**
   * Model ID
   */
  protected _id: string

  /**
   * ID Accessor
   * 
   * @return {string}
   */
  get id() {
    return this._id || str.orderedUuid()
  }

  /**
   * ID Mutator
   */
  set id(id: string) {
    this._id = id
  }

}