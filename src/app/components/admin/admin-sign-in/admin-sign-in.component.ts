import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Login} from '../../../models/login_request'; 
import {APIService} from '../../../services/backend/api.service';

import { ActivatedRoute, Router} from '@angular/router';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.sass']
})
export class AdminSignInComponent implements OnInit {
  signInForm: FormGroup; 
  login: Login;
  correct_login: boolean = true;
  constructor(private initForm: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private apiService: APIService, private adminService: AdminserviceService, private data: DataService) { }

  ngOnInit(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    this.data.resetUser();
    this.signInForm = this.initForm.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.signInForm.valueChanges.subscribe(()=>{this.login = this.signInForm.value;})
  }
  validation() {
    this.adminService.login_user(this.login).subscribe((resp: any) => {
      
      this.router.navigate(['admin']);
      localStorage.setItem('admin_token', resp.token);
      localStorage.setItem('user_admin', resp.username);
      },
      (error: any) => {this.correct_login = false; this.signInForm.setValue({username: "", password: ""})});
      
  }
  logged(){
    return this.adminService.logIn;
  }

}
