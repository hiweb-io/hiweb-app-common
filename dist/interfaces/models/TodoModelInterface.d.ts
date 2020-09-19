import ModelInterface from "../ModelInterface";
import TodoListModelInterface from './TodoListModelInterface';
export default interface TodoModelInterface extends ModelInterface {
    todo: string;
    todoListId: string;
    todoList: TodoListModelInterface;
}
