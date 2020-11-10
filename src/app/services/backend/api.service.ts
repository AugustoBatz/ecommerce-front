import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import {Signup} from '../../models/signup';
import { Login } from 'src/app/models/login_request';
import { DataService } from '../data/data.service';


@Injectable({
  providedIn: 'root'
})
export class APIService {
  //API_URI = 'http://127.0.0.1:8000/api';
  API_URI = 'https://devsys.pythonanywhere.com/api';
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
      this.data.resetUser();
    }
    userData(){
      let headers1 = new HttpHeaders();
      headers1 = headers1.set('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));
      return this.http.get(this.API_URI + '/user/profile', {
        headers: headers1
      });
    }
   
    public get logIn(): boolean {
      return (localStorage.getItem('auth_token') !== null);
    }
    public get user(): string{
      return localStorage.getItem('user');
    }

}
