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
const Author_1 = __importDefault(require("./Author"));
const core_1 = require("@mikro-orm/core");
const ToOne_1 = __importDefault(require("../decorators/entityDecorators/ToOne"));
let Book = class Book extends BaseEntity_1.default {
    constructor(data) {
        super();
        /**
         * Fillable
         */
        this.fillable = ['id', 'title', 'authorId', 'author'];
        this.fill(data);
    }
    /**
     * Resource type
     */
    get type() {
        return 'books';
    }
    /**
     * Title accessor
     */
    get title() {
        return this._title;
    }
    /**
     * Title mutator
     * @param title
     */
    set title(title) {
        this._title = title;
    }
    /**
     * Serialize to object
     * @return {Object}
     */
    toObject() {
        return {
            id: this.id,
            type: this.type,
            title: this.title,
            relationships: {
                author: this.author || null
            }
        };
    }
};
__decorate([
    core_1.Property(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Book.prototype, "title", null);
__decorate([
    core_1.Property({ hidden: true }),
    __metadata("design:type", String)
], Book.prototype, "authorId", void 0);
__decorate([
    ToOne_1.default('authors', {
        ownKey: 'authorId'
    }),
    __metadata("design:type", Author_1.default
    /**
     * Serialize to object
     * @return {Object}
     */
    )
], Book.prototype, "author", void 0);
Book = __decorate([
    core_1.Entity(),
    __metadata("design:paramtypes", [Object])
], Book);
exports.default = Book;
//# sourceMappingURL=Book.js.map