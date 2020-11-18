import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content';
import { APIService } from 'src/app/services/backend/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  public content: Content = {
    name: '',
    pr_1: '', 
    pr_2: '', 
    pr_3: '', 
    img_1: '', 
    img_2: '', 
    img_3: ''
  };
  constructor(private apiService: APIService) { }
  
  ngOnInit(): void {
    this.getContent();
  }
  getContent(){
    this.apiService.getContentData('2').subscribe(
      (res: Content) => {
        this.content = res;
      }, 
      err => console.log(err)
    );
  }
}
