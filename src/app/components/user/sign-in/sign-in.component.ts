import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Login} from '../../../models/login_request'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup; 
  login: Login

  constructor(private initForm: FormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this.initForm.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    })

    this.signInForm.valueChanges.subscribe(()=>{this.login = this.signInForm.value; console.log(this.login)})
  }

}
