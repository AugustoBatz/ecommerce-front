import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup; 

  constructor(private initForm: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.initForm.group({
      email: '',
      name: '',
      lastName: '',
      password: '',
      phone: '',
      address: '',
      city: '',
      country: '',
      zipCode: ''
    })

    this.signUpForm.valueChanges.subscribe(console.log)
  }

}
