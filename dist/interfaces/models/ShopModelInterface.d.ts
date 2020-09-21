import ModelInterface from "../ModelInterface";
export default interface ShopModelInterface extends ModelInterface {
    domain: string;
    name: string;
    status: string;
    config: Object;
    createdAt: string;
    updatedAt: string;
}
