export default abstract class BaseEntity {
    id: any;
    createdAt: Date;
    updatedAt: Date;
    /**
     * Entity must define resource type
     */
    abstract get type(): string;
    /**
     * Define fillable fields for construction
     */
    protected fillable: string[];
    /**
     * Relationship map
     */
    static relationshipMap: {};
    /**
     * Entity fill
     * @param {Object}
     */
    fill(data?: {
        [key: string]: any;
    }): void;
    /**
     * Convert entity to object
     * @return {Object}
     */
    abstract toObject(): {
        [key: string]: any;
    };
    /**
     * Convert entity to json
     * @return {string}
     */
    toJSON(): string;
}
