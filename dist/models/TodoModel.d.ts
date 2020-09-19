import Model from './Model';
import TodoModelInterface from "../interfaces/models/TodoModelInterface";
import TodoListModelInterface from '../interfaces/models/TodoListModelInterface';
export default class TodoModel extends Model implements TodoModelInterface {
    /**
     * Model type
     */
    protected _type: string;
    /**********************************/
    /**
     * Todo
     */
    protected _todo: string;
    /**
     * Todo accessor
     * @return {string}
     */
    get todo(): string;
    /**
     * Todo mutator
     * @param {string}
     */
    set todo(todo: string);
    /**********************************/
    protected _todoListId: string;
    /**
     * TodoListId accessor
     * @return {string}
     */
    get todoListId(): string;
    /**
     * Todo mutator
     * @param {string}
     */
    set todoListId(id: string);
    /**********************************/
    /**
     * TodoList relationship
     */
    protected _todoList: TodoListModelInterface;
    /**
     * TodoList accessor
     * @return {TodoListModelInterface|null}
     */
    get todoList(): TodoListModelInterface | null;
    /**
     * TodoList mutator
     * @param {TodoListModelInterface}
     */
    set todoList(todoList: TodoListModelInterface);
}
