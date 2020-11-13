import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import {Signup} from '../../models/signup';
import { Login } from 'src/app/models/login_request';
import { DataService } from '../data/data.service';
import { Sale } from 'src/app/models/addsale';
import { Contact } from 'src/app/models/contact';


@Injectable({
  providedIn: 'root'
})
export class APIService {
  API_URI = 'http://127.0.0.1:8000/api';
  //API_URI = 'https://clothingmecoders.ddns.net/api';
  constructor(private http: HttpClient, private router: Router, private data: DataService) { 
    
  }
    saveUser(nuser: Signup){
      let headers1 = new HttpHeaders();
      headers1 = headers1.set('mock', 'False');
      return this.http.post(this.API_URI + '/signup', nuser,{
        headers: headers1
      }); 
    }
    login_user(user: Login) {
      let headers1 = new HttpHeaders();
      headers1 = headers1.set('mock', 'False');
      return this.http.post(this.API_URI + '/login', user,{
        headers: headers1
      }) 
    }
    getProduct_List(){
      return this.http.get(this.API_URI + '/user/product');
    }
    getProduct(){
      return this.http.get(this.API_URI + '/user/product/detail/' + localStorage.getItem('code'));
    }
    logout() {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
      localStorage.removeItem('items');
      this.data.resetUser();
    }
    userData(){
      let headers1 = new HttpHeaders();
      headers1 = headers1.set('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));
      return this.http.get(this.API_URI + '/user/profile', {
        headers: headers1
      });
    }
    getContentData(noPage: string){
      return this.http.get(this.API_URI + '/content/page/page'+noPage);
    }
    getCart(){
      let headers1 = new HttpHeaders();
      headers1 = headers1.set('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));
      return this.http.get(this.API_URI + '/shopping-car', {
        headers: headers1
      });
    }
    addSale(sale: Sale){
      let headers1 = new HttpHeaders();
      headers1 = headers1.set('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));
      return this.http.post(this.API_URI + '/sale', sale, {
        headers: headers1
      });
    }
    postContact(message: Contact){
      return this.http.post(this.API_URI + '/contactus', message);
    }
   
    public get logIn(): boolean {
      return (localStorage.getItem('auth_token') !== null);
    }
    public get user(): string{
      return localStorage.getItem('user');
    }

}
