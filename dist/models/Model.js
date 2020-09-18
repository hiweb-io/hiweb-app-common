"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const str_1 = __importDefault(require("../helpers/str"));
class Model {
    /**
     * ID Accessor
     *
     * @return {string}
     */
    get id() {
        return this._id || str_1.default.orderedUuid();
    }
    /**
     * ID Mutator
     */
    set id(id) {
        this._id = id;
    }
}
exports.default = Model;
//# sourceMappingURL=Model.js.map