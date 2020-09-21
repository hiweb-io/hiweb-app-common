"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEntity_1 = __importDefault(require("../entities/BaseEntity"));
const Relationship_1 = require("../decorators/entityDecorators/Relationship");
exports.default = new class RelationshipHelper {
    /**
     * Automatically assemble relationships
     */
    assembleRelationships(...entityGroup) {
        // Group entities by type
        const typeGroupedEntities = {};
        for (let entityCollection of entityGroup) {
            entityCollection.forEach(entity => {
                // Create group if not exists
                if (!typeGroupedEntities.hasOwnProperty(entity.type)) {
                    typeGroupedEntities[entity.type] = [];
                }
                // Push entity to group
                typeGroupedEntities[entity.type].push(entity);
            });
        }
        // Now map
        for (let mappingEntityType in typeGroupedEntities) {
            // List of entities
            const entities = typeGroupedEntities[mappingEntityType];
            // If relationship map found
            if (BaseEntity_1.default.relationshipMap.hasOwnProperty(mappingEntityType)) {
                for (let propertyName in BaseEntity_1.default.relationshipMap[mappingEntityType]) {
                    // Relationship map data
                    const relationshipMapData = BaseEntity_1.default.relationshipMap[mappingEntityType][propertyName];
                    const relationshipEntityType = relationshipMapData.relationshipEntityType;
                    // Ignore if relationship entity type doesn't exist in entity group data
                    if (!typeGroupedEntities.hasOwnProperty(relationshipEntityType)) {
                        continue;
                    }
                    // Map entities
                    entities.forEach(entity => {
                        switch (relationshipMapData.relationshipType) {
                            // To one
                            case Relationship_1.RelationshipType.TO_ONE:
                                // Has own key
                                const ownKey = relationshipMapData.relationshipReference.ownKey;
                                if (ownKey && entity[ownKey]) {
                                    entity[propertyName] = typeGroupedEntities[relationshipEntityType].find(e => e.id === entity[ownKey]) || null;
                                }
                                // Has inverse key
                                const inverseKey = relationshipMapData.relationshipReference.inverseKey;
                                if (inverseKey) {
                                    entity[propertyName] = typeGroupedEntities[relationshipEntityType].find(e => e[inverseKey] === entity.id) || null;
                                }
                                break;
                            // To many
                            case Relationship_1.RelationshipType.TO_MANY:
                                // Has own key
                                const toManyOwnKey = relationshipMapData.relationshipReference.ownKey;
                                if (toManyOwnKey && Array.isArray(entity[toManyOwnKey])) {
                                    entity[propertyName] = typeGroupedEntities[relationshipEntityType].map(e => entity[toManyOwnKey].include(e.id) ? e : null).filter(e => e ? true : false);
                                }
                                // Has inverse key
                                const toManyInverseKey = relationshipMapData.relationshipReference.inverseKey;
                                if (toManyInverseKey) {
                                    entity[propertyName] = typeGroupedEntities[relationshipEntityType].map(e => e[toManyInverseKey] === entity.id ? e : null).filter(e => e ? true : false);
                                }
                                break;
                        }
                    });
                }
            }
        }
    }
};
//# sourceMappingURL=entityHelper.js.map