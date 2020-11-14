import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Login} from '../../../models/login_request'; 
import {APIService} from '../../../services/backend/api.service';
import { Router} from '@angular/router';
import { Cart } from 'src/app/models/shopping_cart';
import { DataService } from 'src/app/services/data/data.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup; 
  login: Login;
  correct_login: boolean = true;
  constructor(private initForm: FormBuilder, private router: Router, private dataService: DataService, private apiService: APIService) { }

  ngOnInit(): void {
    this.signInForm = this.initForm.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.signInForm.valueChanges.subscribe(()=>{this.login = this.signInForm.value;})
  }
  validation() {
    this.apiService.login_user(this.login).subscribe((resp: any) => {
      
      this.router.navigate(['profile']);
      localStorage.setItem('auth_token', resp.token);
      localStorage.setItem('user', resp.username);
      this.apiService.getCart().subscribe(
        (res: Cart) => {
          this.dataService.set_ShoppingCart(res);
          console.log(this.dataService.shopping_cart);
        },
        err => console.log(err)
      );
      },
      (error: any) => {this.correct_login = false; this.signInForm.setValue({username: "", password: ""})});
      
  }
  logged(){
    return this.apiService.logIn;
  }

}
