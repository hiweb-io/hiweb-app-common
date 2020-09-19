import ModelInterface from "../interfaces/ModelInterface";
import SchemaInterface from '../interfaces/SchemaInterface';
export default class Document {
    /**
     * Document primary data
     */
    protected data: ModelInterface | ModelInterface[];
    /**
     * Document related data
     */
    protected related: ModelInterface[];
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
     * Schema map (model type => schema)
     */
    protected schemaMap: {
        todoLists: (todoList: import("..").TodoListModelInterface) => SchemaInterface;
        todos: (todo: import("..").TodoModelInterface) => SchemaInterface;
    };
    /**
     * Set document primary data
     * @param {ModelInterface | ModelInterface[]} data
     * @return {Document} this
     */
    setData(data: ModelInterface | ModelInterface[]): Document;
    /**
     * Set document related data
     * @param {ModelInterface | ModelInterface[]} data
     * @return {Document} this
     */
    setRelated(data: ModelInterface | ModelInterface[]): Document;
    /**
     * Add data to related
     * @param {ModelInterface | ModelInterface[]} data
     * @return {Document} this
     */
    addRelated(data: ModelInterface | ModelInterface[]): Document;
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
    protected compileResource(resourceSchema: SchemaInterface): Object;
    /**
     * Get model schema
     * @param {ModelInterface}
     * @return {Object}
     */
    protected getModelSchema(model: ModelInterface): any;
    /**
     * Automatically add related resources
     */
    protected autoAddRelated(modelSchema: SchemaInterface): void;
}
