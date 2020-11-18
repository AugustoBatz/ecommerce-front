import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Signup } from 'src/app/models/signup';
import { APIService } from 'src/app/services/backend/api.service';
import { DataService } from 'src/app/services/data/data.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  user: Signup = {
    first_name: '',
    last_name: '',
    phone: '',
    address_a: '',
    address_b: '',
    email: '',
    password: '',
    username: ''
  };

  constructor(
    private data: DataService,
    private initForm: FormBuilder,
    private apiService: APIService,
    private router: Router
    ) { }

  

  ngOnInit(): void {
    this.signUpForm = this.initForm.group({
      first_name: '',
      last_name: '',
      username: '',
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
    console.log(this.user);
    this.apiService.saveUser(this.user).subscribe((resp: any) => {    
          this.clearFullHtmlData();  
          alert('Registro completo. Puede iniciar sesión.');
          this.router.navigate(['sign-in']);
        },
        (error: any) => {
          console.log("ERROR: " + error );
          alert('Registro fallido. Por favor intente de nuevo.');
          this.clearErrorHtmlData();
        }
      );
      
  }

  asignUserData(singupForm : FormGroup) {    
    let user : Signup = 
    {
      first_name: '',
      last_name: '',
      phone: '',
      address_a: '',
      address_b: '',
      email: '',
      password: '',
      username: ''
    };

    user.email = singupForm.get('email').value;
    user.username = singupForm.get('username').value;
    user.first_name = singupForm.get('first_name').value;
    user.last_name = singupForm.get('last_name').value;
    user.phone = singupForm.get('phone').value;
    user.address_a = singupForm.get('address_a').value;
    user.password = singupForm.get('password').value;
    user.address_b = singupForm.get('country').value + ", " 
        + singupForm.get('zip_code').value + ", " + singupForm.get('city').value;

    return user;
  }

  clearFullHtmlData() {
    this.signUpForm.setValue(
      {
        first_name: '', 
        last_name: '', 
        phone: '', 
        username: '',
        address_a: '', 
        email:'', 
        password:'', 
        city:'', 
        country:'', 
        zip_code:''
      }
    )
  }

  clearErrorHtmlData() {
    this.signUpForm.setValue(
      {
        password:''
      }
    )
  }
}
