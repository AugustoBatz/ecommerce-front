import { Injectable } from '@angular/core';
import { Cart } from 'src/app/models/shopping_cart';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  current_user: User = {
    first_name: "",
    username: "",
    last_name: "",
    phone: "",
    address_a: "",
    address_b: "",
    email: "",
    is_admin: true
};
  product_code: string = ''; 
  current_cart: Cart ={
    items: [],
    car_id: 0,
    quantity: 0,
    sub_total: 0
  }; 
  constructor() { }
  resetUser(){
    this.current_user = {
      first_name: "",
      username: "",
      last_name: "",
      phone: "",
      address_a: "",
      address_b: "",
      email: "",
      is_admin: true
  };
  }
  public get user(): User{
    return this.current_user;
  }
  public set_user(user: User){
    this.current_user = user;
  }
  public get prod_code(): string{
    return this.product_code;
  }
  public set_ProductCode(code: string){
    this.product_code = code;
  }
  public get shopping_cart(): Cart{
    return this.current_cart;
  }
  public set_ShoppingCart(cart: Cart){
    this.current_cart = cart;
    localStorage.setItem('cart', this.current_cart.car_id.toString());
    localStorage.setItem('items', this.current_cart.items.length.toString());
  }
}
