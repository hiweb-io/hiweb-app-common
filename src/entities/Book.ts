import BaseEntity from "./BaseEntity"
import Author from "./Author"
import { Entity, Property, ManyToOne } from "@mikro-orm/core"
import ToOne from "../decorators/entityDecorators/ToOne"

@Entity()
export default class Book extends BaseEntity {

  /**
   * Fillable
   */
  protected fillable = ['id', 'title', 'authorId', 'author']

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

  //-------------------------------------------------------//
  /**
   * Title
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

  //-------------------------------------------------------//
  /**
   * Author ID
   */
  @Property({ hidden: true })
  authorId: string

  /**
   * Author relationship
   */
  @ToOne('authors', {
    ownKey: 'authorId'
  })
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
