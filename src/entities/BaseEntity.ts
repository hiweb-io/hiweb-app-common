import { PrimaryKey, Property } from "@mikro-orm/core"
import stringHelper from "../helpers/stringHelper"

export default abstract class BaseEntity {

  @PrimaryKey({ onCreate: () => stringHelper.orderedUuid() })
  id = null

  @Property()
  createdAt = new Date()

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date()

  /**
   * Entity must define resource type
   */
  abstract get type(): string

  /**
   * Define fillable fields for construction
   */
  protected fillable: string[] = []

  /**
   * Relationship map
   */
  static relationshipMap = {}

  /**
   * Entity fill
   * @param {Object}
   */
  fill(data?: {[key: string]: any}) {

    // Skip if data not set
    if (!data) {
      return
    }

    // Fill data
    for (let key in data) {

      // Check if is fillable
      if (this.fillable.indexOf(key) > -1) {
        this[key] = data[key]
      }
    }
  }

  /**
   * Convert entity to object
   * @return {Object}
   */
  abstract toObject(): {[key: string]: any}

  /**
   * Convert entity to json
   * @return {string}
   */
  toJSON() {

    // Get object
    const obj = this.toObject()

    // If relationships set
    if (obj.hasOwnProperty('relationships')) {
      const relationships = obj.relationships
      for (let relationshipKey in relationships) {

        // Relationship data
        const relationshipData = relationships[relationshipKey]

        // If is array
        if (Array.isArray(relationshipData)) {
          relationships[relationshipKey] = relationshipData.map(entity => {

            // Ignore if not a valid entity
            // @ts-ignore
            if (!entity instanceof BaseEntity) {
              return false
            }

            // Map resource linkage
            return {
              id: entity.id,
              type: entity.type
            }

          }).filter(e => e ? true : false)

        } else if (relationshipData instanceof BaseEntity) { // Is entity

          // Set relationship data as resource linkage (instead of full entity)
          relationships[relationshipKey] = {
            id: relationshipData.id,
            type: relationshipData.type
          }
        }
      }

      // Reset obj relationships
      obj.relationships = relationships
    }

    // Return json
    return JSON.stringify(obj)
  }
}
