import Model from './Model'
import TodoModelInterface from "../interfaces/models/TodoModelInterface"
import TodoListModelInterface from '../interfaces/models/TodoListModelInterface'

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

  /**********************************/
  protected _todoListId: string

  /**
   * TodoListId accessor
   * @return {string}
   */
  get todoListId() {
    return this._todoListId
  }

  /**
   * Todo mutator
   * @param {string}
   */
  set todoListId(id: string) {
    this._todoListId = id
  }

  /**********************************/
  /**
   * TodoList relationship
   */
  protected _todoList: TodoListModelInterface

  /**
   * TodoList accessor
   * @return {TodoListModelInterface|null}
   */
  get todoList(): TodoListModelInterface | null {
    return this._todoList || null
  }

  /**
   * TodoList mutator
   * @param {TodoListModelInterface}
   */
  set todoList(todoList: TodoListModelInterface) {
    this._todoList = todoList
  }
}
