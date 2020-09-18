import ModelInterface from "../ModelInterface"
import TodoModelInterface from './TodoModelInterface'

export default interface TodoListModelInterface extends ModelInterface {
  title: string

  // Has many todos relationship
  todoIds: string[]
  todos: TodoModelInterface[]
}
