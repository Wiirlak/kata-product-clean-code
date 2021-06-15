import ProductRepository from "../repositories/product.repository";
import {ProductDto} from "../dto/Product.dto";
import PriceRepository from "../repositories/price.repository";
import ProductService from "../services/product.service";

export default class ProductController {
    static getProduct(productId: number, userId?: number): ProductDto {
        const product = ProductRepository.getProduct(productId);
        const price = PriceRepository.getPrice(productId);

        if (userId !== null && userId !== undefined && !isNaN(Number(userId))) {
            price.price = ProductService.applyDiscount(product.id, userId, price.price);
        }

        return {...product, price: Number(price.price.toFixed(2))};
    }
}