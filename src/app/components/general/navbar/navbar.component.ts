import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { APIService } from 'src/app/services/backend/api.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private api: APIService) { }
  login = true;
  user = "Cristian Archila";
  ngOnInit(): void {
  }
  public cambiar(){
    this.login = !this.login;
    console.log(this.login);
  }
  logged(){
    return this.api.logIn;
  }
  logout(){
    this.api.logout();
  }

}
