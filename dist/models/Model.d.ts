import ModelInterface from "../interfaces/ModelInterface";
export default class Model implements ModelInterface {
    /**
     * Model constructor
     * @param data
     */
    constructor(data?: Object);
    /**********************************/
    /**
     * Model ID
     */
    protected _id: string;
    /**
     * ID Accessor
     * @return {string}
     */
    get id(): string;
    /**
     * ID Mutator
     * @param {string}
     */
    set id(id: string);
    /**********************************/
    /**
     * Model type
     */
    protected _type: string;
    /**
     * Type Accessor
     * @return {string}
     */
    get type(): string;
    /**
     * Type Mutator
     * @param {string}
     */
    set type(type: string);
    /**********************************/
    /**
     * Created at
     */
    protected _createdAt: string;
    /**
     * Created at accessor
     * @return {string}
     */
    get createdAt(): string;
    /**
     * Created at mutator
     * @param {string}
     */
    set createdAt(createdAt: string);
    /**********************************/
    /**
     * Updated at
     */
    protected _updatedAt: string;
    /**
     * Updated at accessor
     * @return {string}
     */
    get updatedAt(): string;
    /**
     * Updated at mutator
     * @param {string}
     */
    set updatedAt(updatedAt: string);
}
