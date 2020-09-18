import Model from './Model'
import TodoModelInterface from "../interfaces/models/TodoModelInterface";

export default class TodoModel extends Model implements TodoModelInterface {

  /**
   * Model type
   */
  protected _type: string = 'todos'

  /**********************************/
  /**
   * Todo
   */
  protected _todo: string

  /**
   * Todo accessor
   * @return {string}
   */
  get todo() {
    return this._todo
  }

  /**
   * Todo mutator
   * @param {string}
   */
  set todo(todo: string) {
    this._todo = todo
  }

}
