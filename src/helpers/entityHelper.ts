import BaseEntity from "../entities/BaseEntity"
import {RelationshipType} from "../decorators/entityDecorators/Relationship"

export default new class RelationshipHelper {

  /**
   * Automatically assemble relationships
   */
  assembleRelationships(...entityGroup: Array<BaseEntity>[]) {

    // Group entities by type
    const typeGroupedEntities = {}
    for (let entityCollection of entityGroup) {
      entityCollection.forEach(entity => {

        // Create group if not exists
        if (!typeGroupedEntities.hasOwnProperty(entity.type)) {
          typeGroupedEntities[entity.type] = []
        }

        // Push entity to group
        typeGroupedEntities[entity.type].push(entity)
      })
    }

    // Now map
    for (let mappingEntityType in typeGroupedEntities) {

      // List of entities
      const entities = typeGroupedEntities[mappingEntityType]

      // If relationship map found
      if (BaseEntity.relationshipMap.hasOwnProperty(mappingEntityType)) {
        for (let propertyName in BaseEntity.relationshipMap[mappingEntityType]) {

          // Relationship map data
          const relationshipMapData = BaseEntity.relationshipMap[mappingEntityType][propertyName]
          const relationshipEntityType = relationshipMapData.relationshipEntityType

          // Ignore if relationship entity type doesn't exist in entity group data
          if (!typeGroupedEntities.hasOwnProperty(relationshipEntityType)) {
            continue
          }

          // Map entities
          entities.forEach(entity => {

            switch (relationshipMapData.relationshipType) {

              // To one
              case RelationshipType.TO_ONE:

                // Has own key
                const ownKey = relationshipMapData.relationshipReference.ownKey
                if (ownKey && entity[ownKey]) {
                  entity[propertyName] = typeGroupedEntities[relationshipEntityType].find(e => e.id === entity[ownKey]) || null
                }

                // Has inverse key
                const inverseKey = relationshipMapData.relationshipReference.inverseKey
                if (inverseKey) {
                  entity[propertyName] = typeGroupedEntities[relationshipEntityType].find(e => e[inverseKey] === entity.id) || null
                }

              break

              // To many
              case RelationshipType.TO_MANY:

                // Has own key
                const toManyOwnKey = relationshipMapData.relationshipReference.ownKey
                if (toManyOwnKey && Array.isArray(entity[toManyOwnKey])) {
                  entity[propertyName] = typeGroupedEntities[relationshipEntityType].map(e => entity[toManyOwnKey].include(e.id) ? e : null).filter(e => e ? true : false)
                }

                // Has inverse key
                const toManyInverseKey = relationshipMapData.relationshipReference.inverseKey
                if (toManyInverseKey) {
                  entity[propertyName] = typeGroupedEntities[relationshipEntityType].map(e => e[toManyInverseKey] === entity.id ? e : null).filter(e => e ? true : false)
                }

              break
            }

          })
        }
      }
    }
  }

}
