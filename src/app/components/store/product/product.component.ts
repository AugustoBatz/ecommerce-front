import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sale } from 'src/app/models/addsale';
import { Product_Data } from 'src/app/models/product_data';
import { APIService } from 'src/app/services/backend/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  constructor(private apiService: APIService, private router: Router) { }
  public url: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR905Tkp8MLUa9Z-kQ04XPNeODOHIM2WNJPIQ&usqp=CAU";
  public maxnum: number = -1;
  public item_color: string = ''; 
  public item_size: string = ''; 
  public sale: Sale ={
    product_detail: 0,
    quantity: 0,
    shopping_cart_id: 0
  }
  public quantity: number = 0;
  public product_detail: number = 0;
  public disabled: boolean = true;
  public current_product: Product_Data = {
    stock: '',
    name: '', 
    code: '',
    category: '', 
    brand: '', 
    image: '',
    details: []
  };
  ngOnInit(): void {
    this.init_product();
  }
  init_product(){
    this.apiService.getProduct()
    .subscribe(
      (res: Product_Data)=> {
        this.current_product = res;
      
      }, 
      err=> console.log(err)
    )
  }
  set_max(num: number){
      this.maxnum = num; 
  }
  set_product(id: number){
    this.product_detail = id;
    console.log(this.product_detail);
  }
  insert(){
    if(this.apiService.logIn){
      this.sale.product_detail = this.product_detail; 
      this.sale.quantity = this.quantity;
      this.sale.shopping_cart_id = parseInt(localStorage.getItem('cart'));
      this.apiService.addSale(this.sale)
      .subscribe(
        res=>{
          console.log(res);
        },
        err=>console.log(err)
      );
    }
  }
  disable():boolean{
    if (this.item_color == ''){
      this.disabled = true;
    }
    if (this.item_size == ''){
      this.disabled = true;
    }
    if (this.quantity == 0){
      this.disabled = true
    }
    else{
      this.disabled = false 
    }
    return this.disabled
  }
  logged():boolean{
    return this.apiService.logIn
  }
}
