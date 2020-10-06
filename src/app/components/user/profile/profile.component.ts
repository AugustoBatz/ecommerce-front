import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/models/profile_data';
//import { DataService } from "src/app/services/data/data.service";
import {  UsersService} from "src/app/components/user/profile/user.service";
import { APIService } from 'src/app/services/backend/api.service';
import { User} from '../../../models/user';
import { DataService } from 'src/app/services/data/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  users: any;
  constructor( public usersService: UsersService, private apiService: APIService, public data: DataService, private router: Router ) { }

  ngOnInit() {
    this.getUser();
  } 
  getUser(){
    if (this.data.current_user.username == ""){
      this.apiService.userData().subscribe(
        (res: User) => {
          this.data.set_user(res); 
        }
          , 
        err => 
        {
          this.apiService.logout();
          this.router.navigate(['sign-in']);
          alert("Su sesión ha caducado, por favor vuelva a iniciar sesión");
        }
      ); 
    }
  }
    
}