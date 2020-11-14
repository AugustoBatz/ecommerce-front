import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/addproduct';
import { Admin } from 'src/app/models/admin_user';
import { Content } from 'src/app/models/content';
import { Login } from 'src/app/models/login_request';
import { Purchase } from 'src/app/models/purchasedetail';
import { Sub_product } from 'src/app/models/sub_product';
import { Signup } from 'src/app/models/signup';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  //API_URI = 'http://127.0.0.1:8000/api';
  API_URI = 'https://clothingmecoders.ddns.net/api';
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
  productData(){
    let headers1 = new HttpHeaders();
    headers1 = headers1.set('Authorization', 'Bearer ' + localStorage.getItem('admin_token'));
    return this.http.get(this.API_URI + '/product', {
      headers: headers1
    });
  }
  getContentData(){
    return this.http.get(this.API_URI + '/content/page');
  }
  updateData(noPage: string, content: Content){
    return this.http.put(this.API_URI + '/content/page/page'+noPage, content);
  }
  getProduct_List(){
    let headers1 = new HttpHeaders();
    headers1 = headers1.set('Authorization', 'Bearer ' + localStorage.getItem('admin_token'));
    return this.http.get(this.API_URI + '/product/listsubproducts', {
      headers: headers1
    });
  }
  getAdmin_List(){
    let headers1 = new HttpHeaders();
    headers1 = headers1.set('Authorization', 'Bearer ' + localStorage.getItem('admin_token'))
    headers1 = headers1.set('mock', 'false');
    return this.http.get(this.API_URI + '/admin', {
      headers: headers1
    });
  }
  getAdmin_user(username: string){
    let headers1 = new HttpHeaders();
    headers1 = headers1.set('Authorization', 'Bearer ' + localStorage.getItem('admin_token'));
    return this.http.get(this.API_URI + '/admin/'+username, {
      headers: headers1
    });
  }
  updateAdmin_user(username: string, user: Admin){
    let headers1 = new HttpHeaders();
    headers1 = headers1.set('Authorization', 'Bearer ' + localStorage.getItem('admin_token'))
    headers1 = headers1.set('mock', 'False');
    return this.http.put(this.API_URI + '/admin/' + username, user, {
      headers: headers1
    });
  }
  insertAdmin_user(user: Signup){
    let headers1 = new HttpHeaders();
    headers1 = headers1.set('Authorization', 'Bearer ' + localStorage.getItem('admin_token'))
    headers1 = headers1.set('mock', 'False');
    return this.http.post(this.API_URI + '/admin', user, {
      headers: headers1
    });
  } 
  deleteAdmin_user(username: string){
    let headers1 = new HttpHeaders();
    headers1 = headers1.set('Authorization', 'Bearer ' + localStorage.getItem('admin_token'));
    return this.http.delete(this.API_URI + '/admin/'+username, {
      headers: headers1
    });
  }
  subproductData(code: String){
    let headers1 = new HttpHeaders();
    headers1 = headers1.set('Authorization', 'Bearer ' + localStorage.getItem('admin_token'));
    return this.http.get(this.API_URI + '/product/sub-detail/'+ code, {
      headers: headers1
    });
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
