import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/addproduct';
import { Lista } from 'src/app/models/productos';


@Injectable({
  providedIn: 'root'
})
export class DataProductsService {
  lista: [any];
  constructor() { }
  
  public get get_list(): any{
  return this.lista;
}

public set_list(list: any){
  this.lista = list;
}
}
