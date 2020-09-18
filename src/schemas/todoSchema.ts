import TodoModelInterface from "../interfaces/models/TodoModelInterface"

export default (todo: TodoModelInterface): Object => {
  return {
    id: todo.id,
    type: todo.type,
    todo: todo.todo
  }
}
