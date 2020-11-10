import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.sass']
})
export class ContentManagementComponent implements OnInit {

  public url = 'https://forestprod.org/global_graphics/default-store-350x350.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
