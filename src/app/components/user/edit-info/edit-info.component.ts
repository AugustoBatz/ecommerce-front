import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Edit } from 'src/app/models/edit_info';
import { Signup } from 'src/app/models/signup';
import { APIService } from 'src/app/services/backend/api.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.sass']
})
export class EditInfoComponent implements OnInit {
  editForm: FormGroup; 
  passwordForm: FormGroup; 
  match: boolean = true; 
  modify_user: Edit = {
    first_name: 'null',
    last_name: 'null',
    phone: 'null',
    address_a: 'null',
    address_b: 'null',
  }; 
  
  constructor(private data: DataService, private initForm: FormBuilder, private router: Router, private apiService: APIService) { }

  
  ngOnInit(): void {
      this.editForm = this.initForm.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        phone: ['', Validators.required],
        address_a: ['', Validators.required],
        address_b: ['', Validators.required],
      });
      this.passwordForm = this.initForm.group({
        password: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
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
      address_b: this.data.user.address_b
    });
  }
  validar(){
    this.passwordForm.valueChanges.subscribe(()=>{
      if(this.passwordForm.controls['password'].value != this.passwordForm.controls['confirmPassword'].value)
      {
        this.match = false;
        return this.match;
      }
      if(this.passwordForm.controls['password'].value == this.passwordForm.controls['confirmPassword'].value)
      {
        this.match = true;
        return this.match;
      }
    })
  }
  modificar(){
    this.apiService.editProfile(this.modify_user)
    .subscribe(
      res=>
      {
        alert("Información Actualizada"); 
        this.data.resetUser(); 
        this.router.navigate(["profile"]);
      },
      err=>console.log(err)
    );
  }
  password(){
    this.apiService.changePassword({
      new: this.passwordForm.controls['password'].value
    })
    .subscribe(
      res=>{
        alert("Contraseña actualizada, por favor ingrese nuevamente"); 
        this.apiService.logout();
        this.router.navigate(['sign-in']);

      },
      err=>console.log(err)
    )
  }
}


