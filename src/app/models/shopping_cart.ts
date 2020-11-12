import {Item} from './cart_item';
export interface Cart{
    items: Item[], 
    car_id: number, 
    quantity: number,
    sub_total: number
}