import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Login} from '../../../models/login_request'; 
import {APIService} from '../../../services/backend/api.service';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup; 
  login: Login;
  correct_login: boolean = true;
  constructor(private initForm: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private apiService: APIService) { }

  ngOnInit(): void {
    this.signInForm = this.initForm.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.signInForm.valueChanges.subscribe(()=>{this.login = this.signInForm.value;})
  }
  validar() {
    this.apiService.login_user(this.login).subscribe((resp: any) => {
      
      this.router.navigate(['profile']);
      localStorage.setItem('auth_token', resp.token);
      localStorage.setItem('user', resp.username);
      },
      (error: any) => {this.correct_login = false; this.signInForm.setValue({username: "", password: ""})});
      
  }
  logged(){
    return this.apiService.logIn;
  }

}
