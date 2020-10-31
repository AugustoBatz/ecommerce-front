import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/addproduct';
import { SProduct_Response } from 'src/app/models/sproduct_response';
import { Sub_product } from 'src/app/models/sub_product';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent implements OnInit {
  public selected_file;
  public sub_product: Sub_product;
  added_product: boolean = false;
  purchase_details:SProduct_Response[] = []; 
  productForm: FormGroup; 
  sub_productForm: FormGroup;
  purchaseForm: FormGroup;
  constructor(private initForm: FormBuilder, private adminService: AdminserviceService, private router: Router) { }
  private product: Product = {
    name: '',
    code: '',
    category: '',
    brand: '',
    image: ''

  }
  public url = 'https://forestprod.org/global_graphics/default-store-350x350.jpg';
  ngOnInit(): void {
    this.productForm = this.initForm.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      category: ['', Validators.required],
      brand: ['', Validators.required],
      image: ['', Validators.required]
    });
    this.sub_productForm = this.initForm.group({
      code_product: ['', Validators.required],
      color: ['', Validators.required],
      size: ['', Validators.required],
      price: ['', Validators.required]
    });
    if(!this.adminService.logIn){
      this.router.navigate(['admin/sign-in']);
    }
    //this.productForm.valueChanges.subscribe(console.log)

  }
  onFileSelected(event){
    if (event.target.files){
      var reader = new FileReader(); 
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any)=>{
        this.url = event.target.result;
        this.productForm.setValue({
          name: this.productForm.controls['name'].value,
          code: this.productForm.controls['code'].value,
          category: this.productForm.controls['category'].value,
          brand: this.productForm.controls['brand'].value,
          image: this.url
        })
      }
    }

  }
  clear_data(){
    this.productForm.setValue({
      name: '',
      code: '',
      category: '',
      brand: '',
      image: ''
    });
    this.sub_productForm.setValue({
      code_product: '',
      color: '', 
      size: '', 
      price: ''
    });
    this.purchase_details = [];
    this.url='https://forestprod.org/global_graphics/default-store-350x350.jpg';
  }

  addSubProduct(){
    this.adminService.insert_subproduct(this.sub_productForm.value).subscribe(
      (res: SProduct_Response) => 
      {
        console.log(res);
        alert("Sub producto agregado");
        this.sub_productForm.setValue({
          code_product: this.sub_productForm.controls['code_product'].value,
          color: '', 
          size: '', 
          price: ''
        });
        this.purchase_details.push(res);
      },
      (err) => {
        if (err.status == 400){
          alert("Sub producto repetido");
        }
      }
    );
    
  }
  product_exist(){
    return this.added_product;
  }
  onUpload(){
    console.log(this.selected_file);
  }
  exit(){
    this.router.navigate(['admin']);
  }
  insertProduct(){ 
    this.product = this.productForm.value;
    console.log(this.product);
    this.adminService.insert_product(this.product).subscribe(
      res => 
      {
        this.added_product = true;
        alert("Producto agregado correctamente");
        this.sub_productForm.controls['code_product'].setValue(this.product.code);
      },
      err => {
        if (err.status == 400){
          alert("Producto repetido");
        }
      }
    )
  }
}
