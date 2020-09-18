"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Helpers
const str_1 = __importDefault(require("./helpers/str"));
// Models
const Shop_1 = __importDefault(require("./models/Shop"));
exports.default = {
    helpers: {
        str: str_1.default
    },
    models: {
        Shop: Shop_1.default
    }
};
//# sourceMappingURL=index.js.map