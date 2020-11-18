import { Content } from '../../../models/content';
import { Component, OnInit } from '@angular/core';
import lozad from 'lozad';
import { APIService } from 'src/app/services/backend/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: APIService) { }
  public content: Content = {
    name: '',
    pr_1: '', 
    pr_2: '', 
    pr_3: '', 
    img_1: '', 
    img_2: '', 
    img_3: ''
  };
  ngOnInit(): void {
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();
    this.close_sesion();
    this.getContent();
  }
  getContent(){
    this.apiService.getContentData('1').subscribe(
      (res: Content) => {
        this.content = res;
      }, 
      err => console.log(err)
    );
  }
  close_sesion(){
    localStorage.removeItem('admin_token');
    localStorage.removeItem('user_admin');
  }
}
