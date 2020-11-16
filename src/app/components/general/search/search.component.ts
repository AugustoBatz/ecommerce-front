import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalog } from 'src/app/models/catalog_item';
import { APIService } from 'src/app/services/backend/api.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  results: Catalog[];
  constructor(private apiService: APIService, public dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getProduct_List()
    .subscribe(
      (res: Catalog[])=>this.results = res,
      err=> console.log(err)
    );
    console.log(this.dataService.searchString);
  }
  set_product(code: string){
    localStorage.setItem('code', code);
    this.router.navigate(['store/product']);
  }

}
