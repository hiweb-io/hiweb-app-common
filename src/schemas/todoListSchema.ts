import TodoListModelInterface from "../interfaces/models/TodoListModelInterface"

export default (todoList: TodoListModelInterface): Object => {
  return {
    id: todoList.id,
    type: todoList.type,
    title: todoList.title,
    relationships: {
      todos: todoList.todos
    }
  }
}
