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
const core_1 = require("@mikro-orm/core");
const stringHelper_1 = __importDefault(require("../helpers/stringHelper"));
class BaseEntity {
    constructor() {
        this.id = null;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        /**
         * Define fillable fields for construction
         */
        this.fillable = [];
    }
    /**
     * Entity fill
     * @param {Object}
     */
    fill(data) {
        // Skip if data not set
        if (!data) {
            return;
        }
        // Fill data
        for (let key in data) {
            // Check if is fillable
            if (this.fillable.indexOf(key) > -1) {
                this[key] = data[key];
            }
        }
    }
    /**
     * Convert entity to json
     * @return {string}
     */
    toJSON() {
        // Get object
        const obj = this.toObject();
        // If relationships set
        if (obj.hasOwnProperty('relationships')) {
            const relationships = obj.relationships;
            for (let relationshipKey in relationships) {
                // Relationship data
                const relationshipData = relationships[relationshipKey];
                // If is array
                if (Array.isArray(relationshipData)) {
                    relationships[relationshipKey] = relationshipData.map(entity => {
                        // Ignore if not a valid entity
                        // @ts-ignore
                        if (!entity instanceof BaseEntity) {
                            return false;
                        }
                        // Map resource linkage
                        return {
                            id: entity.id,
                            type: entity.type
                        };
                    }).filter(e => e ? true : false);
                }
                else if (relationshipData instanceof BaseEntity) { // Is entity
                    // Set relationship data as resource linkage (instead of full entity)
                    relationships[relationshipKey] = {
                        id: relationshipData.id,
                        type: relationshipData.type
                    };
                }
            }
            // Reset obj relationships
            obj.relationships = relationships;
        }
        // Return json
        return JSON.stringify(obj);
    }
}
/**
 * Relationship map
 */
BaseEntity.relationshipMap = {};
__decorate([
    core_1.PrimaryKey({ onCreate: () => stringHelper_1.default.orderedUuid() }),
    __metadata("design:type", Object)
], BaseEntity.prototype, "id", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Object)
], BaseEntity.prototype, "createdAt", void 0);
__decorate([
    core_1.Property({ onUpdate: () => new Date() }),
    __metadata("design:type", Object)
], BaseEntity.prototype, "updatedAt", void 0);
exports.default = BaseEntity;
//# sourceMappingURL=BaseEntity.js.map