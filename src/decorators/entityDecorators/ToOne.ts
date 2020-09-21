import Relationship, {RelationshipReference, RelationshipType} from "./Relationship"

export default (relationshipEntityType: string, relationshipReference: RelationshipReference) => {
  return Relationship(relationshipEntityType, RelationshipType.TO_ONE, relationshipReference)
}
