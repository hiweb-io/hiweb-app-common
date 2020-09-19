import TodoModelInterface from "../interfaces/models/TodoModelInterface"
import SchemaInterface from '../interfaces/SchemaInterface'

export default (todo: TodoModelInterface): SchemaInterface => {
  return {
    id: todo.id,
    type: todo.type,
    todo: todo.todo,
    relationships: {
      todoList: todo.todoList
    }
  }
}
