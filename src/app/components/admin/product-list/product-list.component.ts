import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';
import { DataProductsService } from 'src/app/services/dataProducts/data-products.service';
import { DataService } from 'src/app/services/data/data.service';
import { toArray } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  productos: any;
  subproductos: any;
  producto: any;
  arreglo: [];
  contenido = document.getElementById('codigo');
  
  constructor(public data: DataService, private adminService: AdminserviceService, private router: Router, public prodService: DataProductsService, public subService: DataProductsService) { }

  ngOnInit(): void {
    if(!this.adminService.logIn){
      this.router.navigate(['admin/sign-in']);
    }
    this.getList();

  }
  getList(){
    this.adminService.productData().subscribe(
      (res: []) => {
        this.prodService.set_list(res);
        console.log(res);
        this.productos= this.prodService.get_list;
      }
      , 
      err => 
      {
        alert("Error");
      }
    );
    
  }
  getSubproduct(code: String){
    this.adminService.subproductData(code).subscribe(
      (res2: []) => {
       for(var index in res2){
          
          if(index == "details"){
            this.arreglo = res2[index];
          }
        }
        for(var index in this.arreglo){
          console.log(this.arreglo[index]['color']);
        }
      }
      , 
      err => 
      {
        alert("Error");
      }
    );
  }

}
