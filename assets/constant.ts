import {ProductInterface} from "../src/interfaces/product.interface";
import {PriceInterface} from "../src/interfaces/price.interface";
import {UserInterface} from "../src/interfaces/user.interface";
import {SellHistoryInterface} from "../src/interfaces/sell-history.interface";

const USERS: UserInterface[] = [
    {id: 1, name: "Bob", login: "bob"},
    {id: 2, name: "Jeanne", login: "jeanne"},
];

export const SELL_HISTORY: SellHistoryInterface[] = [
    {userId: 1, productId: 1, date: new Date(2021, 2, 17, 15, 24, 26)},
    {userId: 1, productId: 1, date: new Date(2021, 2, 17, 15, 24, 26)},
    {userId: 1, productId: 1, date: new Date(2021, 2, 17, 15, 24, 26)},
    {userId: 1, productId: 1, date: new Date(2021, 2, 17, 15, 24, 26)},
    {userId: 1, productId: 1, date: new Date(2021, 2, 17, 15, 24, 26)},
    {userId: 1, productId: 1, date: new Date(2021, 2, 17, 15, 24, 26)},
    {userId: 1, productId: 4, date: new Date(2021, 2, 17, 15, 24, 26)},
    {userId: 1, productId: 2, date: new Date(2021, 4, 17, 15, 24, 26)},
    {userId: 1, productId: 3, date: new Date(2021, 3, 17, 15, 24, 26)},
];

export const PRODUCT: ProductInterface[] = [
    {id: 1, name: "Aspirateur", description: "Un super aspirateur", category : 2, details: [{name : "test", value: "chose"}]},
    {id: 2, name: "PC", description: "Un super PC", category : 2, details: [{name : "test", value: "chose"}]},
    {id: 3, name: "Dragon du Pacifique", description: "Un super dragon", category : 3, details: [{name : "test", value: "chose"}]},
    {id: 4, name: "Dragon mais pas du Pacifique", description: "Un super dragon mais pas du Pacifique", category : 2, details: [{name : "test", value: "chose"}]},
];

export const PRICE : PriceInterface[]= [
    {productId: 1, update_date: new Date(2020, 11, 17, 15, 24, 26), price: 20.25},
    {productId: 2, update_date: new Date(2020, 2, 2, 11, 20, 11), price: 10.5},
    {productId: 3, update_date: new Date(2020, 6, 28, 23, 11, 2), price: 1050},
    {productId: 4, update_date: new Date(2020, 12, 12, 3, 46, 58), price: 200},
];