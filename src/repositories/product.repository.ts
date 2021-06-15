import {PRODUCT} from "../../assets/constant";
import {ProductInterface} from "../interfaces/product.interface";

export default class ProductRepository {
    static getProduct(productId: number): ProductInterface {
        const product = PRODUCT.find(product => product.id === productId);
        if (product === null || product === undefined) {
            throw new Error("Not found user");
        }
        return product;
    }
}