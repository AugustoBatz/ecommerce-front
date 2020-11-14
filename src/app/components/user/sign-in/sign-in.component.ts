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
  recoveryForm: FormGroup; 
  login: Login;
  email_sended: boolean = false; 
  correct_email: boolean = true; 
  correct_login: boolean = true;
  constructor(private initForm: FormBuilder, private router: Router, private dataService: DataService, private apiService: APIService) { }

  ngOnInit(): void {
    this.signInForm = this.initForm.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.recoveryForm = this.initForm.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }
  validation() {
    this.login = this.signInForm.value; 
    this.apiService.login_user(this.login).subscribe((resp: any) => {
      
      this.router.navigate(['profile']);
      localStorage.setItem('auth_token', resp.token);
      localStorage.setItem('user', resp.username);
      this.apiService.getCart().subscribe(
        (res: Cart) => {
          this.dataService.set_ShoppingCart(res);
        },
        err => console.log(err)
      );
      },
      (error: any) => {this.correct_login = false; this.signInForm.setValue({username: "", password: ""})});
      
  }
  logged(){
    return this.apiService.logIn;
  }
  password(){
    this.apiService.passwordRecovery(this.recoveryForm.value)
    .subscribe(
      res=>{
        this.email_sended = true; 
      },
      err=>{
        this.email_sended = false; 
        this.correct_email= false;
      }
    );
  }

}
