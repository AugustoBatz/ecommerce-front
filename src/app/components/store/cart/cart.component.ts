import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/shopping_cart';
import { APIService } from 'src/app/services/backend/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  constructor(private apiService: APIService) { }
  cart: Cart ={
    items: [],
    car_id: 0,
    quantity: 0,
    sub_total: 0
  };
  ngOnInit(): void {
    this.apiService.getCart()
    .subscribe(
      (res: Cart)=> {
        this.cart = res;
        
      }
    )
  }

}
