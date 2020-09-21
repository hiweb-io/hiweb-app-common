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
    /**
     * Name
     */
    _name: string;
    get name(): string;
    set name(name: string);
    /**
     * Books relationship
     */
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
