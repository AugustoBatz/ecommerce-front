import {Detail} from './detail';
export interface Product_Data{
    stock: string,
    name: string, 
    code: string,
    category: string, 
    brand: string, 
    image: string,
    details: Detail[]
}