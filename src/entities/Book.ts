import BaseEntity from "./BaseEntity"
import Author from "./Author"
import { Entity, Property, ManyToOne } from "@mikro-orm/core"

@Entity()
export default class Book extends BaseEntity {

  /**
   * Fillable
   */
  protected fillable = ['id', 'title', 'author']

  /**
   * Resource type
   */
  get type(): string {
    return 'books'
  }

  constructor(data?: {[key: string]: any}) {
    super();
    this.fill(data)
  }

  /**
   * Title property
   */
  protected _title: string

  /**
   * Title accessor
   */
  @Property()
  get title() {
    return this._title
  }

  /**
   * Title mutator
   * @param title
   */
  set title(title: string) {
    this._title = title
  }

  /**
   * Author relationship
   */
  author!: Author

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
    }
  }
}
