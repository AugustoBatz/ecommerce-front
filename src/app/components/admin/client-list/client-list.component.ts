import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin_user';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.sass']
})
export class ClientListComponent implements OnInit {
  public client_list: Admin[] = [];
  constructor(private adminService: AdminserviceService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.getClientList()
    .subscribe(
      (res: Admin[])=>{
        this.client_list= res; 
        console.log(this.client_list);
      },
      err=>console.log(err)
    );
    if(!this.adminService.logIn){
      this.router.navigate(['admin/sign-in']);
    }
  }
  

}
