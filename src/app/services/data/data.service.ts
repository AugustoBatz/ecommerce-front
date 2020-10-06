import { Injectable } from '@angular/core';
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
}
