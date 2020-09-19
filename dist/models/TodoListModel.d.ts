import Model from './Model';
import TodoListModelInterface from "../interfaces/models/TodoListModelInterface";
import TodoModelInterface from '../interfaces/models/TodoModelInterface';
export default class TodoListModel extends Model implements TodoListModelInterface {
    /**
     * Model type
     */
    protected _type: string;
    /**********************************/
    /**
     * Title
     */
    protected _title: string;
    /**
     * Title accessor
     * @return {string}
     */
    get title(): string;
    /**
     * Title mutator
     * @param {string}
     */
    set title(title: string);
    /**********************************/
    /**
     * Todo ids
     */
    protected _todoIds: string[];
    /**
     * Todo ids accessor
     */
    get todoIds(): string[];
    /**
     * Todo ids mutator
     */
    set todoIds(ids: string[]);
    /**********************************/
    /**
     * Todo models (relationship)
     */
    protected _todos: TodoModelInterface[];
    /**
     * Todos accessor
     */
    get todos(): TodoModelInterface[];
    /**
     * Todo mutator
     */
    set todos(todos: TodoModelInterface[]);
}
