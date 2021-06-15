import SellHistoryRepository from "../repositories/sell-history.repository";
import moment from 'moment';

export default class ProductService {
    static applyDiscount(productId: number, userId: number, price: number): number {
        const startDateDiscount1 = moment().subtract(6, 'month').toISOString();
        const startDateDiscount2 = moment().subtract(1, 'year').toISOString();
        const endDate = moment().toISOString();
        let multiplier = 1;
        if (SellHistoryRepository.getSellHistoryByUserAndNotProductBetweenDate(userId, productId, startDateDiscount1, endDate ).length >= 3) {
            multiplier -= 0.1;
        }
        if (SellHistoryRepository.getSellHistoryByUserAndProductBetweenDate(userId, productId, startDateDiscount2, endDate).length > 5 ) {
            multiplier += 0.05;
        }
        return price * multiplier;
    }
}