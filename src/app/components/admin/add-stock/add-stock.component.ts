import { Component, NgZone, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from 'src/app/models/purchasedetail';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';
import {Product_list} from '../../../models/product_list';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.sass']
})
export class AddStockComponent implements OnInit {

  constructor(private adminService: AdminserviceService, private router: Router,  private ngZone: NgZone) { }
  @ViewChildren('id') ids:QueryList<any>;
  @ViewChildren('quantity') quantitys:QueryList<any>;
  @ViewChildren('cost') costs:QueryList<any>;
  public product_list: Product_list[];
  public order_list: Purchase[];
    ngOnInit(): void {
    if(!this.adminService.logIn){
      this.router.navigate(['admin/sign-in']);
    }
    this.fill_list(); 
  }

  fill_list(){
    this.adminService.getProduct_List().subscribe(
      (res: Product_list[])=>{
        this.product_list = res;
      },
      err =>console.log(err)
    );
  }
  sendData(index){
    let idArray = this.ids.toArray();
    let quantityArray = this.quantitys.toArray();
    let costArray = this.costs.toArray();
    let new_Purchase: Purchase = {
      id_detail_product: 0,
      quantity: 0,
      cost: 0    
    };
    console.log(index);
    for (let i = 0; i < idArray.length; i++){
      if(idArray[i].nativeElement.value == index){
        new_Purchase.id_detail_product = idArray[i].nativeElement.value;
        new_Purchase.quantity =  quantityArray[i].nativeElement.value;
        new_Purchase.cost = costArray[i].nativeElement.value;
        console.log(new_Purchase);
        this.adminService.insert_purchaseDetail(new_Purchase)
        .subscribe(
          res => {
            alert('Se ha agregado a inventario exitosamente');
            quantityArray[i].nativeElement.value = 0;
            costArray[i].nativeElement.value = 0;
            this.fill_list();
          }, 
          err => {
            if(err.status == 400){
              alert('Su sesión ha caducado, por favor vuelva a ingresar');
              this.router.navigate(['admin/sign-in']);
            }
          }
        )
      }
      
    }
    
  }

}
