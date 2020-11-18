import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(public adminService: AdminserviceService, private router: Router) { }

  ngOnInit(): void {
    
  }
  close(){
    this.adminService.logout();
    this.router.navigate(['admin/sign-in']);
  }

}
