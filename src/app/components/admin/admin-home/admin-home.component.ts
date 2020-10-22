import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.sass']
})
export class AdminHomeComponent implements OnInit {

  constructor(private adminService: AdminserviceService, private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    if(!this.adminService.logIn){
      this.router.navigate(['admin/sign-in']);
    }
  }

}
