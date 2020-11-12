import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin_user';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.sass']
})
export class ListUsersComponent implements OnInit {
  public admin_list: Admin[] = []; 
  public username_toUpdate: string = '';
  public update_admin: Admin ={
    first_name: '',
    last_name: '', 
    phone: '',
    address_a: '',
    address_b: '',
    email: '',
    username: ''
  }
  public insert_admin: Admin={
    first_name: '',
    last_name: '', 
    phone: '',
    address_a: '',
    address_b: '',
    email: '',
    username: ''
  }
  constructor(private adminService: AdminserviceService) { }

  ngOnInit(): void {
    this.getAdmins();
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

}
