import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/models/profile_data';
//import { DataService } from "src/app/services/data/data.service";
import {  UsersService} from "src/app/components/user/profile/user.service";
import { APIService } from 'src/app/services/backend/api.service';
import { User} from '../../../models/user';
import { DataService } from 'src/app/services/data/data.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  users: any;
  constructor( public usersService: UsersService, private apiService: APIService, public data: DataService ) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    });
    this.getUser();
  } 
  getUser(){
    if (this.data.current_user.username == ""){
      this.apiService.userData().subscribe(
        (res: User) => {
          this.data.set_user(res); 
          console.log(this.data.user);
        }
          , 
        err => console.log(err)
      ); 
    }
  }
    
}