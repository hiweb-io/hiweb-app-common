"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = __importDefault(require("./Model"));
class TodoModel extends Model_1.default {
    constructor() {
        super(...arguments);
        /**
         * Model type
         */
        this._type = 'todos';
    }
    /**
     * Todo accessor
     * @return {string}
     */
    get todo() {
        return this._todo;
    }
    /**
     * Todo mutator
     * @param {string}
     */
    set todo(todo) {
        this._todo = todo;
    }
    /**
     * TodoListId accessor
     * @return {string}
     */
    get todoListId() {
        return this._todoListId;
    }
    /**
     * Todo mutator
     * @param {string}
     */
    set todoListId(id) {
        this._todoListId = id;
    }
    /**
     * TodoList accessor
     * @return {TodoListModelInterface|null}
     */
    get todoList() {
        return this._todoList || null;
    }
    /**
     * TodoList mutator
     * @param {TodoListModelInterface}
     */
    set todoList(todoList) {
        this._todoList = todoList;
    }
}
exports.default = TodoModel;
//# sourceMappingURL=TodoModel.js.map