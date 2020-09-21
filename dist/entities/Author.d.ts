import BaseEntity from "./BaseEntity";
import Book from "./Book";
export default class Author extends BaseEntity {
    /**
     * Fillable
     */
    protected fillable: string[];
    /**
     * Resource type
     */
    get type(): string;
    constructor(data?: {
        [key: string]: any;
    });
    _name: string;
    get name(): string;
    set name(name: string);
    books: Book[];
    /**
     * Serialize to object
     * @return {Object}
     */
    toObject(): {
        id: any;
        type: string;
        name: string;
        relationships: {
            books: Book[];
        };
    };
}
