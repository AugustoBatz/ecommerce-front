import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin_user';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';
import { Signup } from 'src/app/models/signup';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.sass']
})
export class ListUsersComponent implements OnInit {
  public admin_list: Admin[] = []; 
  public current_admin: string = localStorage.getItem('user_admin');
  public username_toUpdate: string = '';
  public username_toDelete: string = '';
  public update_admin: Admin ={
    first_name: '',
    last_name: '', 
    phone: '',
    address_a: '',
    address_b: '',
    email: '',
    username: ''
  }
  public insert_admin: Signup={
    first_name: '',
    last_name: '', 
    phone: '',
    address_a: '',
    address_b: '',
    email: '',
    password: '',
    username: ''
  }
  signUpForm: FormGroup;
  
  constructor(private adminService: AdminserviceService, private initForm: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getAdmins();
    this.signUpForm = this.initForm.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required], 
      phone: ['', Validators.required],
      address_a: ['', Validators.required],
      address_b: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required]
    })
    if(!this.adminService.logIn){
      this.router.navigate(['admin/sign-in']);
    }
  }
  getAdmins(){
    this.adminService.getAdmin_List()
    .subscribe(
      (res: Admin[])=>{
        this.admin_list = res;

      },
      err => console.log(err)
    );
  }
  getAdmin(username: string){
    this.adminService.getAdmin_user(username)
    .subscribe(
      (res:Admin) => {
        this.update_admin = res; 
        this.username_toUpdate = this.update_admin.username;
      },
      err=>console.log(err)
    );
  }
  updateAdmin(){
    this.adminService.updateAdmin_user(this.username_toUpdate, this.update_admin)
    .subscribe(
      res=> {
        console.log(res);
        this.getAdmins();
      },
      err=> {
        console.log(err.error.phone);
      }
    );
  }
  setDelete(user: string){
    this.username_toDelete = user; 
    console.log(this.username_toDelete);
  }
  registerAdmin(){
    this.insert_admin = this.signUpForm.value;
    this.adminService.insertAdmin_user(this.insert_admin).subscribe(
      res=>{
        alert("Usuario Registrado"); 
        this.getAdmins(); 
      },
      err=>console.log(err)
    );
  }
  deleteAdmin(){
    this.adminService.deleteAdmin_user(this.username_toDelete)
    .subscribe(
      res=>{
        alert("El usuario: " + this.username_toDelete + " fue eliminado"); 
        this.getAdmins();
      },
      err=>console.log(err)
    );
  }

}
