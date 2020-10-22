import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  constructor(private adminService: AdminserviceService, private router: Router) { }

  ngOnInit(): void {
    if(!this.adminService.logIn){
      this.router.navigate(['admin/sign-in']);
    }
  }

}
