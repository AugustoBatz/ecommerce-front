import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/shopping_cart';
import { APIService } from 'src/app/services/backend/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  constructor(private apiService: APIService, private router: Router) { }
  cart: Cart ={
    items: [],
    car_id: 0,
    quantity: 0,
    sub_total: 0
  };
  delete_item = {
    id: '',
    name: ''
  }
  successful_delete: boolean = false; 
  no_delete: boolean = true; 
  ngOnInit(): void {
    this.get_Cart(); 
  }
  get_Cart(){
    this.apiService.getCart()
    .subscribe(
      (res: Cart)=> {
        this.cart = res;
      },
      (err: HttpErrorResponse)=>{
        if(err.status == 401){
          this.apiService.logout();
          this.router.navigate(['sign-in']);
          alert("Su sesión ha caducado, por favor vuelva a iniciar sesión");
        }
      }
    )
  }  
  deleteCartItem(){
    this.apiService.deleteCartItem(this.delete_item.id)
    .subscribe(
      res=>{
        this.successful_delete = true; 
        this.get_Cart(); 
      },
      err=>{
        alert("No se pudo eliminar el producto");
      }
    );
  }
  set_Item(id: string, name: string){
    this.delete_item.id = id; 
    this.delete_item.name = name;
  }

}
