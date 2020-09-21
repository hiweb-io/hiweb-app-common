"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEntity_1 = __importDefault(require("./BaseEntity"));
const core_1 = require("@mikro-orm/core");
const ToMany_1 = __importDefault(require("../decorators/entityDecorators/ToMany"));
let Author = class Author extends BaseEntity_1.default {
    constructor(data) {
        super();
        /**
         * Fillable
         */
        this.fillable = ['id', 'name', 'books'];
        /**
         * Books relationship
         */
        this.books = [];
        this.fill(data);
    }
    /**
     * Resource type
     */
    get type() {
        return 'authors';
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    /**
     * Serialize to object
     * @return {Object}
     */
    toObject() {
        return {
            id: this.id,
            type: this.type,
            name: this.name,
            relationships: {
                books: this.books
            }
        };
    }
};
__decorate([
    core_1.Property(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Author.prototype, "name", null);
__decorate([
    ToMany_1.default('books', {
        inverseKey: 'authorId'
    }),
    __metadata("design:type", Array)
], Author.prototype, "books", void 0);
Author = __decorate([
    core_1.Entity(),
    __metadata("design:paramtypes", [Object])
], Author);
exports.default = Author;
//# sourceMappingURL=Author.js.map