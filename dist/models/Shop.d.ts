import Model from './Model';
import ShopModelInterface from "../interfaces/models/ShopModelInterface";
export default class Shop extends Model implements ShopModelInterface {
    /**
     * Model type
     */
    protected _type: string;
    /**********************************/
    /**
     * Shop domain
     */
    protected _domain: string;
    /**
     * Domain accessor
     * @return {string}
     */
    get domain(): string;
    /**
     * Domain mutator
     * @param {string}
     */
    set domain(domain: string);
    /**********************************/
    /**
     * Shop name
     */
    protected _name: string;
    /**
     * Name accessor
     * @return {string}
     */
    get name(): string;
    /**
     * Name mutator
     * @param {string}
     */
    set name(name: string);
    /**********************************/
    /**
     * Shop status
     */
    protected _status: string;
    /**
     * Status accessor
     * @return {string}
     */
    get status(): string;
    /**
     * Status mutator
     * @param {string}
     */
    set status(status: string);
    /**********************************/
    /**
     * Shop config
     */
    protected _config: Object;
    /**
     * Config accessor
     * @return {Object}
     */
    get config(): Object;
    /**
     * Config mutator
     * @param {Object}
     */
    set config(config: Object);
}
