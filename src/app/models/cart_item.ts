export interface Item{
    quantity: number,
    sub_total: number, 
    price: number,
    product_detail: {
        name: string,
        image: string, 
        brand: string,
        code: string,
        size: string, 
        color: string 
    }
}