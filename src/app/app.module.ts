//Modulos de angular 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { AdminSignInComponent } from './components/admin/admin-sign-in/admin-sign-in.component';
import { MenuComponent } from './components/admin/menu/menu.component';
//Componentes 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { HeaderComponent } from './components/general/header/header.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { EditInfoComponent } from './components/user/edit-info/edit-info.component';
import { PurchaseHistoryComponent } from './components/user/purchase-history/purchase-history.component';
import { ContactUsComponent } from './components/general/contact-us/contact-us.component';
import { HomeComponent } from './components/general/home/home.component';
import { AboutComponent } from './components/general/about/about.component';
//Servicios 
import { APIService } from './services/backend/api.service';
import {DataService} from './services/data/data.service';
import { AdminserviceService } from './services/admin/adminservice.service';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { AddStockComponent } from './components/admin/add-stock/add-stock.component';
import { DataProductsService } from './services/dataProducts/data-products.service';
import { ListProductsComponent } from './components/store/list-products/list-products.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    EditInfoComponent,
    PurchaseHistoryComponent,
    ContactUsComponent,
    HomeComponent,
    AboutComponent,
    AddProductComponent,
    AdminSignInComponent,
    MenuComponent,
    AdminHomeComponent,
    ProductListComponent,
    AddStockComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  providers: [APIService, DataService, AdminserviceService, DataProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
