import { Component } from '@angular/core';
import { AdminserviceService } from './services/admin/adminservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Proyecto';
  constructor(private adminService: AdminserviceService){}
  admin_logged(){
    return this.adminService.logIn;
  }
}
