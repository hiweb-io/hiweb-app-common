import BaseEntity from "../../entities/BaseEntity"

export enum RelationshipType {
  TO_ONE,
  TO_MANY,
}

export type RelationshipReference = {
  ownKey?: string,
  inverseKey?: string
}

export default (relationshipEntityType: string, relationshipType: RelationshipType, relationshipReference: RelationshipReference) => {
  return (target: BaseEntity, propertyName: string) => {

    // Throw error if target type isn't defined
    if (!target.type) {
      throw new Error('Entity type is not defined')
    }

    // Create map for target type if not defined
    if (!BaseEntity.relationshipMap.hasOwnProperty(target.type)) {
      BaseEntity.relationshipMap[target.type] = {}
    }

    // Save relationship map
    BaseEntity.relationshipMap[target.type][propertyName] = {
      relationshipEntityType,
      relationshipType,
      relationshipReference
    }
  }
}
