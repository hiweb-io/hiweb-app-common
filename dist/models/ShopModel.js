"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = __importDefault(require("./Model"));
class ShopModel extends Model_1.default {
    constructor() {
        super(...arguments);
        /**
         * Model type
         */
        this._type = 'shops';
        /**********************************/
        /**
         * Shop config
         */
        this._config = {};
    }
    /**
     * Domain accessor
     * @return {string}
     */
    get domain() {
        return this._domain;
    }
    /**
     * Domain mutator
     * @param {string}
     */
    set domain(domain) {
        this._domain = domain;
    }
    /**
     * Name accessor
     * @return {string}
     */
    get name() {
        return this._name;
    }
    /**
     * Name mutator
     * @param {string}
     */
    set name(name) {
        this._name = name;
    }
    /**
     * Status accessor
     * @return {string}
     */
    get status() {
        return this._status || 'inactive';
    }
    /**
     * Status mutator
     * @param {string}
     */
    set status(status) {
        this._status = (['active', 'inactive'].indexOf(status) > -1) ? status : 'inactive';
    }
    /**
     * Config accessor
     * @return {Object}
     */
    get config() {
        return this._config;
    }
    /**
     * Config mutator
     * @param {Object}
     */
    set config(config) {
        this._config = config;
    }
}
exports.default = ShopModel;
//# sourceMappingURL=ShopModel.js.map