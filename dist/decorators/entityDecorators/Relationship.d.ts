import BaseEntity from "../../entities/BaseEntity";
export declare enum RelationshipType {
    TO_ONE = 0,
    TO_MANY = 1
}
export declare type RelationshipReference = {
    ownKey?: string;
    inverseKey?: string;
};
declare const _default: (relationshipEntityType: string, relationshipType: RelationshipType, relationshipReference: RelationshipReference) => (target: BaseEntity, propertyName: string) => void;
export default _default;
