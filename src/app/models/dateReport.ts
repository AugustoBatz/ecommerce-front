import { SaleDetail } from './saleDetail';

export interface DateReport{
    date: string, 
    address: string, 
    user?: string, 
    total: number, 
    quantity: number,
    sale_detail: SaleDetail[]
}