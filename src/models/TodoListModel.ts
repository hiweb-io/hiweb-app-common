import Model from './Model'
import TodoListModelInterface from "../interfaces/models/TodoListModelInterface"
import TodoModelInterface from '../interfaces/models/TodoModelInterface'

export default class TodoListModel extends Model implements TodoListModelInterface {

  /**
   * Model type
   */
  protected _type: string = 'todoLists'

  /**********************************/
  /**
   * Title
   */
  protected _title: string

  /**
   * Title accessor
   * @return {string}
   */
  get title(): string {
    return this._title
  }

  /**
   * Title mutator
   * @param {string}
   */
  set title(title: string) {
    this._title = title
  }

  /**********************************/
  /**
   * Todo ids
   */
  protected _todoIds: string[]

  /**
   * Todo ids accessor
   */
  get todoIds(): string[] {
    return this._todoIds || []
  }

  /**
   * Todo ids mutator
   */
  set todoIds(ids: string[]) {
    this._todoIds = ids
  }

  /**********************************/
  /**
   * Todo models
   */
  protected _todos: TodoModelInterface[]

  /**
   * Todos accessor
   */
  get todos(): TodoModelInterface[] {
    return this._todos || []
  }

  /**
   * Todo mutator
   */
  set todos(todos: TodoModelInterface[]) {
    this._todos = todos
  }
}
