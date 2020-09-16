//Modulos de angular 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';


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
    AboutComponent
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
  providers: [APIService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
