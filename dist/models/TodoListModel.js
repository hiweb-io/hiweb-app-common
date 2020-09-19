"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = __importDefault(require("./Model"));
class TodoListModel extends Model_1.default {
    constructor() {
        super(...arguments);
        /**
         * Model type
         */
        this._type = 'todoLists';
    }
    /**
     * Title accessor
     * @return {string}
     */
    get title() {
        return this._title;
    }
    /**
     * Title mutator
     * @param {string}
     */
    set title(title) {
        this._title = title;
    }
    /**
     * Todo ids accessor
     */
    get todoIds() {
        return this._todoIds || [];
    }
    /**
     * Todo ids mutator
     */
    set todoIds(ids) {
        this._todoIds = ids;
    }
    /**
     * Todos accessor
     */
    get todos() {
        return this._todos || [];
    }
    /**
     * Todo mutator
     */
    set todos(todos) {
        this._todos = todos;
    }
}
exports.default = TodoListModel;
//# sourceMappingURL=TodoListModel.js.map