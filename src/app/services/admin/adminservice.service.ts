import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/addproduct';
import { Login } from 'src/app/models/login_request';
import { Purchase } from 'src/app/models/purchasedetail';
import { Sub_product } from 'src/app/models/sub_product';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  API_URI = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }
  login_user(user: Login) {
    let headers1 = new HttpHeaders();
    headers1 = headers1.set('mock', 'False');
    return this.http.post(this.API_URI + '/login/admin', user,{
      headers: headers1
    }) 
  }
  insert_product(product: Product){
    let headers1 = new HttpHeaders();
      headers1 = headers1.set('Authorization', 'Bearer ' + localStorage.getItem('admin_token'));
    return this.http.post(this.API_URI + '/product', product,{
      headers: headers1
    }) 
  }
  insert_subproduct(subproduct: Sub_product){ 
    let headers1 = new HttpHeaders();
    headers1 = headers1.set('Authorization', 'Bearer ' + localStorage.getItem('admin_token'));
    return this.http.post(this.API_URI + '/product/detail', subproduct,{
      headers: headers1
    }) 
  }
  insert_purchaseDetail(purchase_detail: Purchase){
    let headers1 = new HttpHeaders();
    headers1 = headers1.set('Authorization', 'Bearer ' + localStorage.getItem('admin_token'));
    return this.http.post(this.API_URI + '/product/detail/purchase', purchase_detail,{
      headers: headers1
    }) 
  }
  logout() {
    localStorage.removeItem('admin_token');
    //localStorage.removeItem('user_admin');
  }
  public get logIn(): boolean {
    return (localStorage.getItem('admin_token') !== null);
  }
  public get admin_in(): boolean {
    return (localStorage.getItem('user_admin') !== null);
  }
  public get user(): string{
    return localStorage.getItem('user_admin');
  }
}
