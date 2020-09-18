import stringHelper from '../helpers/stringHelper'
import ModelInterface from "../interfaces/ModelInterface"

export default class Model implements ModelInterface {

  /**
   * Model constructor
   * @param data
   */
  constructor(data?: Object) {

  }

  /**********************************/
  /**
   * Model ID
   */
  protected _id: string

  /**
   * ID Accessor
   * @return {string}
   */
  get id() {
    return this._id || stringHelper.orderedUuid()
  }

  /**
   * ID Mutator
   * @param {string}
   */
  set id(id: string) {
    this._id = id
  }

  /**********************************/
  /**
   * Model type
   */
  protected _type: string

  /**
   * Type Accessor
   * @return {string}
   */
  get type() {
    return this._type
  }

  /**
   * Type Mutator
   * @param {string}
   */
  set type(type: string) {
    throw new Error('Type cannot be set in runtime')
  }

  /**********************************/
  /**
   * Created at
   */
  protected _createdAt: string

  /**
   * Created at accessor
   * @return {string}
   */
  get createdAt() {
    return this._createdAt
  }

  /**
   * Created at mutator
   * @param {string}
   */
  set createdAt(createdAt: string) {
    this._createdAt
  }

  /**********************************/
  /**
   * Updated at
   */
  protected _updatedAt: string

  /**
   * Updated at accessor
   * @return {string}
   */
  get updatedAt() {
    return this._updatedAt
  }

  /**
   * Updated at mutator
   * @param {string}
   */
  set updatedAt(updatedAt: string) {
    this._updatedAt = updatedAt
  }
}
