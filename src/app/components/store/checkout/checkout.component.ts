import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Checkout } from 'src/app/models/sale';
import { Cart } from 'src/app/models/shopping_cart';
import { User } from 'src/app/models/user';
import { APIService } from 'src/app/services/backend/api.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {

  constructor(private apiService: APIService, private data: DataService, private router: Router) { }
  cart: Cart ={
    items: [],
    car_id: 0,
    quantity: 0,
    sub_total: 0
  };
  current_user: User ={
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    address_a: '',
    address_b: '',
    username: ''
  };
  deliver_address: string = '';
  address_change: boolean = false; 
  pay_method: number = 1;
  user: string = localStorage.getItem('user');
  ngOnInit(): void {
    this.fillProduct_List();
    this.getUser();
  }
  fillProduct_List(){
    this.apiService.getCart()
    .subscribe(
      (res: Cart)=> {
        this.cart = res;
        
      }
    )
  }
  getUser(){
    if (this.data.current_user.username == ""){
      this.apiService.userData().subscribe(
        (res: User) => {
          this.data.set_user(res); 
          this.current_user = this.data.user;
          this.deliver_address = this.current_user.address_a
        }
          , 
        err => 
        {
          this.apiService.logout();
          this.router.navigate(['sign-in']);
          alert("Su sesión ha caducado, por favor vuelva a iniciar sesión");
        }
      ); 
    }
    else{
      this.current_user = this.data.current_user;
    }
  }
  changeAddress(){
    this.deliver_address = this.current_user.address_a
  }
  makeSale(){
    let cart_id = localStorage.getItem('cart'); 
    let sale: Checkout = {
      method_pay: 1, 
      address: this.deliver_address
    }
    this.apiService.make_Purchase(cart_id, sale)
    .subscribe(
      res=>{
        alert("Compra exitosa"); 
        this.router.navigate(['store/success']);
        localStorage.removeItem('cart'); 
        localStorage.setItem('items', '0');
      },
      (err: HttpErrorResponse)=>{
        alert("Tiene un producto que excede la existencia actual, se eliminará de su carrito para que pueda continuar con su compra"); 
        this.fillProduct_List();
      }
    );
  }
}
