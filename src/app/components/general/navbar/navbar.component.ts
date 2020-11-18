import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { APIService } from 'src/app/services/backend/api.service';
import { DataService } from 'src/app/services/data/data.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private api: APIService, private dataService: DataService) { }
  login = true;
  search: string='';
  ngOnInit(): void {
  }
  public cambiar(){
    this.login = !this.login;
  }
  getItems(){
    return parseInt(localStorage.getItem('items'));
  }
  logged(){
    return this.api.logIn;
  }
  logout(){
    this.api.logout();
  }
  searchProduct(){
    this.dataService.set_Search(this.search);
    this.router.navigate(['search']);
  }

}
