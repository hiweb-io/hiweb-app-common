import BaseEntity from "./BaseEntity";
import Author from "./Author";
export default class Book extends BaseEntity {
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
     * Title
     */
    protected _title: string;
    /**
     * Title accessor
     */
    get title(): string;
    /**
     * Title mutator
     * @param title
     */
    set title(title: string);
    /**
     * Author ID
     */
    authorId: string;
    /**
     * Author relationship
     */
    author: Author;
    /**
     * Serialize to object
     * @return {Object}
     */
    toObject(): {
        id: any;
        type: string;
        title: string;
        relationships: {
            author: Author;
        };
    };
}
