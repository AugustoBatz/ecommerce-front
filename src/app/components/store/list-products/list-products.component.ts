import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/backend/api.service';
import { DataService } from 'src/app/services/data/data.service';
import { Catalog } from '../../../models/catalog_item';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.sass']
})
export class ListProductsComponent implements OnInit {

  constructor(private apiService: APIService, private dataService: DataService, private router: Router) { }
  public catalog: Catalog[];
  ngOnInit(): void {
    this.fill_catalog();
  }
  fill_catalog(){
    this.apiService.getProduct_List()
    .subscribe(
      (res:Catalog[]) => {
        this.catalog = res;
        console.log(this.catalog);
      },
      err=>console.log(err)
    )
  }
  set_product(code: string){
    localStorage.setItem('code', code);
    this.router.navigate(['store/product']);
  }
}
