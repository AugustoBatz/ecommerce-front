import {Sub_product_list} from './sub_product_list';
export interface Product_list{
    id: number,
    name: string,
    code: string, 
    category: string, 
    brand: string, 
    image: string, 
    subproducts: Sub_product_list[]
}