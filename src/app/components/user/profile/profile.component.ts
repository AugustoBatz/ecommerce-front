import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/models/profile_data';
//import { DataService } from "src/app/services/data/data.service";
import {  UsersService} from "src/app/components/user/profile/user.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  users: any;
  constructor( public usersService: UsersService ) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  } 
    
}