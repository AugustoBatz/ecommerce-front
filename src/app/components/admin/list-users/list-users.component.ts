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
  public update_admin: Admin ={
    first_name: '',
    last_name: '', 
    phone: '',
    address_a: '',
    address_b: '',
    email: '',
    is_admin: false,
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

  }

}
