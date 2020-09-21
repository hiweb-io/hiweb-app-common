"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipType = void 0;
const BaseEntity_1 = __importDefault(require("../../entities/BaseEntity"));
var RelationshipType;
(function (RelationshipType) {
    RelationshipType[RelationshipType["TO_ONE"] = 0] = "TO_ONE";
    RelationshipType[RelationshipType["TO_MANY"] = 1] = "TO_MANY";
})(RelationshipType = exports.RelationshipType || (exports.RelationshipType = {}));
exports.default = (relationshipEntityType, relationshipType, relationshipReference) => {
    return (target, propertyName) => {
        // Throw error if target type isn't defined
        if (!target.type) {
            throw new Error('Entity type is not defined');
        }
        // Create map for target type if not defined
        if (!BaseEntity_1.default.relationshipMap.hasOwnProperty(target.type)) {
            BaseEntity_1.default.relationshipMap[target.type] = {};
        }
        // Save relationship map
        BaseEntity_1.default.relationshipMap[target.type][propertyName] = {
            relationshipEntityType,
            relationshipType,
            relationshipReference
        };
    };
};
//# sourceMappingURL=Relationship.js.map