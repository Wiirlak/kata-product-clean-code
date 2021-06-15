import {PriceInterface} from "../interfaces/price.interface";
import {PRICE} from "../../assets/constant";

export default class PriceRepository {
    static getPrice(productId: number): PriceInterface {
        const price = PRICE.find(price => productId === price.productId);
        if (price === null || price === undefined) {
            throw new Error("Not found price");
        }
        return price;
    }
}