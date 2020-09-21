import BaseEntity from "../entities/BaseEntity";
export default class Document {
    /**
     * Document primary data
     */
    protected data: BaseEntity | BaseEntity[];
    /**
     * Document related data
     */
    protected related: BaseEntity[];
    /**
     * Document meta
     */
    protected meta: {
        [key: string]: any;
    };
    /**
     * Document errors
     */
    protected errors: {
        title: string;
        text?: string;
        code?: string;
    }[];
    /**
     * Set document primary data
     * @param {ModelInterface | ModelInterface[]} data
     * @return {Document} this
     */
    setData(data: BaseEntity | BaseEntity[]): Document;
    /**
     * Set document related data
     * @param {ModelInterface | ModelInterface[]} data
     * @return {Document} this
     */
    setRelated(data: BaseEntity | BaseEntity[]): Document;
    /**
     * Add data to related
     * @param {ModelInterface | ModelInterface[]} data
     * @return {Document} this
     */
    addRelated(data: BaseEntity | BaseEntity[]): Document;
    /**
     * Set document meta
     * @param meta
     */
    setMeta(meta: {
        [key: string]: any;
    }): Document;
    /**
     * Add meta
     * @param meta
     */
    addMeta(meta: {
        [key: string]: any;
    }): Document;
    /**
     * Set errors
     * @param errors
     */
    setErrors(errors: {
        title: string;
        text?: string;
        code?: string;
    }[]): Document;
    /**
     * Compile document
     * @return {Object}
     */
    compile(): Object;
    /**
     * Compile resource schema object
     */
    protected compileEntity(entity: BaseEntity): Object;
    /**
     * Automatically add related resources
     */
    protected autoAddRelated(entity: BaseEntity): void;
}
