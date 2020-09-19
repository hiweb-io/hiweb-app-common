import ModelInterface from "../ModelInterface";
import TodoModelInterface from './TodoModelInterface';
export default interface TodoListModelInterface extends ModelInterface {
    title: string;
    todoIds: string[];
    todos: TodoModelInterface[];
}
