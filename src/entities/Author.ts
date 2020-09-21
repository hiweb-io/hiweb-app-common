import BaseEntity from "./BaseEntity"
import Book from "./Book"
import { Entity, Property, OneToMany, Collection } from "@mikro-orm/core"

@Entity()
export default class Author extends BaseEntity {

  /**
   * Fillable
   */
  protected fillable = ['id', 'name', 'books']

  /**
   * Resource type
   */
  get type(): string {
    return 'authors'
  }

  constructor(data?: {[key: string]: any}) {
    super();
    this.fill(data)
  }

  @Property({ persist: false, hidden: true })
  _name: string

  @Property()
  get name() {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  @Property({ persist: false })
  books: Book[] = []

  /**
   * Serialize to object
   * @return {Object}
   */
  toObject() {
    return {
      id: this.id,
      type: this.type,
      name: this.name,
      relationships: {
        books: this.books
      }
    }
  }
}
