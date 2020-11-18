import { Content } from '../../../models/content';
import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.sass']
})
export class ContentManagementComponent implements OnInit {

  public url = 'https://forestprod.org/global_graphics/default-store-350x350.jpg';
  public content: Content[] = [
      {
        name: 'page1',
        pr_1: '', 
        pr_2: '', 
        pr_3: '',
        img_1: 'https://forestprod.org/global_graphics/default-store-350x350.jpg',
        img_2: 'https://forestprod.org/global_graphics/default-store-350x350.jpg',
        img_3: 'https://forestprod.org/global_graphics/default-store-350x350.jpg',
      },
      {
        name: 'page2',
        pr_1: '', 
        pr_2: '', 
        pr_3: '',
        img_1: 'https://forestprod.org/global_graphics/default-store-350x350.jpg',
        img_2: 'https://forestprod.org/global_graphics/default-store-350x350.jpg',
        img_3: 'https://forestprod.org/global_graphics/default-store-350x350.jpg',
      },
      {
        name: 'page3',
        pr_1: '', 
        pr_2: '', 
        pr_3: '',
        img_1: '',
        img_2: '',
        img_3: '',
      }
  ];
  constructor(private adminService: AdminserviceService, private router:  Router) { }
  ngOnInit(): void {
    if(!this.adminService.logIn){
      this.router.navigate(['admin/sign-in']);
    }
    this.getContent();
  }
  getContent(){
    this.adminService.getContentData().subscribe(
      (res: Content[]) => {
        this.content = res;
      },
      err => console.log(err)
    )
  }
  updateContent(page: string, id: number){
    this.adminService.updateData(page, this.content[id])
    .subscribe(
      res=>alert("Se han realizado los cambios"),
      err=>console.log(err)
    );
  }
  onFileSelected(event, id: number){
    if (event.target.files){
      var reader = new FileReader(); 
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any)=>{
        this.url = event.target.result;
        if(id == 1){
          this.content[0].img_1 = this.url;
        }
        if(id == 2){
          this.content[0].img_2 = this.url;
        }
        if(id == 3){
          this.content[0].img_3 = this.url;
        }
        if(id == 4){
          this.content[1].img_1 = this.url;
        }
        if(id == 5){
          this.content[1].img_2 = this.url;
        }
        if(id == 6){
          this.content[1].img_3 = this.url;
        }
      }
    }

  }

}
