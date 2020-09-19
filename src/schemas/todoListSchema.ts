import TodoListModelInterface from "../interfaces/models/TodoListModelInterface"
import SchemaInterface from '../interfaces/SchemaInterface'

export default (todoList: TodoListModelInterface): SchemaInterface => {
  return {
    id: todoList.id,
    type: todoList.type,
    title: todoList.title,
    relationships: {
      todos: todoList.todos
    }
  }
}
