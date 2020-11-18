export interface SaleDetail{
    product: string, 
    code: string, 
    category: string, 
    brand: string, 
    details: {
        size: string, 
        color: string, 
        quantity: number, 
        sub_total: number,
        price: number
    }
}