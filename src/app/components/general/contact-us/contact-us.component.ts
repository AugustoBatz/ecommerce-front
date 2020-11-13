import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content';
import { APIService } from 'src/app/services/backend/api.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.sass']
})
export class ContactUsComponent implements OnInit {

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
  public contactForm: Contact = {
    name: '',
    useremail: '',
    asunt: '', 
    message: ''
  }
  ngOnInit(): void {
    this.getContent();
  }
  getContent(){
    this.apiService.getContentData('3').subscribe(
      (res: Content) => {
        this.content = res;
      }, 
      err => console.log(err)
    );
  }
  insertContact(){
    this.apiService.postContact(this.contactForm)
    .subscribe(
      res=>{
        alert("Hemos recibido tu mensaje");
        this.contactForm = {
          name: '',
          useremail: '',
          asunt: '', 
          message: ''
        }
      },
      err=>console.log(err)
    );
  }
}
