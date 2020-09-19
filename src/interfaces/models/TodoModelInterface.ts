import ModelInterface from "../ModelInterface";
import TodoListModelInterface from './TodoListModelInterface'

export default interface TodoModelInterface extends ModelInterface {
  todo: string

  // Belongs to todoList
  todoListId: string,
  todoList: TodoListModelInterface
}
