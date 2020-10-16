import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Signup } from 'src/app/models/signup';
import { APIService } from 'src/app/services/backend/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  user: Signup;

  constructor(
    private initForm: FormBuilder,
    private apiService: APIService
    ) { }

  ngOnInit(): void {
    this.signUpForm = this.initForm.group({
      first_name: '',
      last_name: '',
      phone: '',
      address_a: '',
      email: '',  
      password: '',
      city: '',
      country: '',
      zip_code: ''
    })
  }

  registerUser() {
    this.user = this.asignUserData(this.signUpForm);
    this.apiService.saveUser(this.user).subscribe((resp: any) => {      
        },
        (error: any) => {
          this.clearHtmlData();
        }
      );
      
  }

  asignUserData(signUpForm: FormGroup) {    
    let user : Signup;

    user.email = signUpForm.controls['email'].value;
    user.first_name = signUpForm.controls['first_name'].value;
    user.last_name = signUpForm.controls['last_name'].value;
    user.phone = signUpForm.controls['phone'].value;
    user.address_a = signUpForm.controls['address_a'].value;
    user.password = signUpForm.controls['password'].value;
    user.address_b = signUpForm.controls['country'].value + ", " 
        + signUpForm.controls['zip_code'].value + ", " + signUpForm.controls['city'].value;

    return user;
  }

  clearHtmlData() {
    this.signUpForm.setValue(
      {
        first_name: "", 
        last_name: "", 
        phone: "", 
        address_a: "", 
        email:"", 
        password:"",
        city:"",
        country:"",
        zip_code:""
      }
    )
  }
}
