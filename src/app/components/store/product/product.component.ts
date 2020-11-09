import { Component, OnInit } from '@angular/core';
import { Product_Data } from 'src/app/models/product_data';
import { APIService } from 'src/app/services/backend/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  constructor(private apiService: APIService) { }
  public url: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR905Tkp8MLUa9Z-kQ04XPNeODOHIM2WNJPIQ&usqp=CAU";
  public maxnum: number = -1;
  public item_color: string = ''; 
  public item_size: string = ''; 
  public quantity: number = 0;
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
        console.log(this.current_product);
      
      }, 
      err=> console.log(err)
    )
  }
  set_max(num: number){
      this.maxnum = num; 
      console.log(this.maxnum);
  }
  set_product(color: string, size: string){
    this.item_color = color; 
    this.item_size = size; 
    console.log(this.item_color);
    console.log(this.item_size);
  }
  insert(){
    console.log(this.quantity);
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
}
