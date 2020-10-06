import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from 'src/app/models/signup';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.sass']
})
export class EditInfoComponent implements OnInit {
  editForm: FormGroup; 
  match: boolean = true; 
  modify_user: Signup = {
    first_name: '',
    last_name: '',
    phone: '',
    address_a: '',
    address_b: '',
    email: '',
    password: '',
    username: ''
  }; 
  
  constructor(private data: DataService, private initForm: FormBuilder, private router: Router) { }

  ngOnInit(): void {
      this.editForm = this.initForm.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        phone: ['', Validators.required],
        address_a: ['', Validators.required],
        address_b: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        username: ['', Validators.required]
      });
      if (this.data.user.username == '')
      {
        this.router.navigate(['profile']);
      }
      else {
        this.rellenar();
        this.validar();
      }   
  }
  rellenar(){ 
    this.editForm.setValue({
      first_name: this.data.user.first_name,
      last_name: this.data.user.last_name,
      phone: this.data.user.phone, 
      address_a: this.data.user.address_a,
      address_b: this.data.user.address_b,
      email: this.data.user.email, 
      password: '', 
      confirmPassword: '',
      username: this.data.user.username
    });
    console.log(this.editForm.value);
  }
  validar(){
    this.editForm.valueChanges.subscribe(()=>{
      if(this.editForm.controls['password'].value != this.editForm.controls['confirmPassword'].value)
      {
        this.match = false;
        return this.match;
      }
      if(this.editForm.controls['password'].value == this.editForm.controls['confirmPassword'].value)
      {
        this.match = true;
        return this.match;
      }
    })
  }
  modificar(){
    this.modify_user = {
      first_name: this.editForm.controls['first_name'].value,
      last_name: this.editForm.controls['last_name'].value,
      phone: this.editForm.controls['phone'].value,
      address_a: this.editForm.controls['address_a'].value,
      address_b: this.editForm.controls['address_b'].value,
      email: this.editForm.controls['email'].value,
      password: this.editForm.controls['password'].value,
      username: this.editForm.controls['username'].value
    }; 
    console.log(this.modify_user);

  }
}


