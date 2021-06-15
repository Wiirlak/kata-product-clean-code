import {SellHistoryInterface} from "../interfaces/sell-history.interface";
import {SELL_HISTORY} from "../../assets/constant";
import moment from "moment";


export default class SellHistoryRepository {
    static getSellHistoryByUserAndProductBetweenDate(userId: number, productId: number, start: string, end: string): SellHistoryInterface[]{
        return SELL_HISTORY.filter(sell_history => sell_history.userId === userId
                                                && sell_history.productId === productId
                                                && moment(sell_history.date).isBetween(start, end));
    }

    static getSellHistoryByUserAndNotProductBetweenDate(userId: number, productId: number, start: string, end: string): SellHistoryInterface[]{
        return SELL_HISTORY.filter(sell_history => sell_history.userId === userId
                                                && sell_history.productId !== productId
                                                && moment(sell_history.date).isBetween(start, end));
    }
}