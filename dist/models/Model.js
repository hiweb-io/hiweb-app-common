"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stringHelper_1 = __importDefault(require("../helpers/stringHelper"));
class Model {
    /**
     * Model constructor
     * @param data
     */
    constructor(data) {
    }
    /**
     * ID Accessor
     * @return {string}
     */
    get id() {
        return this._id || stringHelper_1.default.orderedUuid();
    }
    /**
     * ID Mutator
     * @param {string}
     */
    set id(id) {
        this._id = id;
    }
    /**
     * Type Accessor
     * @return {string}
     */
    get type() {
        return this._type;
    }
    /**
     * Type Mutator
     * @param {string}
     */
    set type(type) {
        throw new Error('Type cannot be set in runtime');
    }
    /**
     * Created at accessor
     * @return {string}
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     * Created at mutator
     * @param {string}
     */
    set createdAt(createdAt) {
        this._createdAt;
    }
    /**
     * Updated at accessor
     * @return {string}
     */
    get updatedAt() {
        return this._updatedAt;
    }
    /**
     * Updated at mutator
     * @param {string}
     */
    set updatedAt(updatedAt) {
        this._updatedAt = updatedAt;
    }
}
exports.default = Model;
//# sourceMappingURL=Model.js.map