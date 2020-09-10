import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { HeaderComponent } from './components/general/header/header.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { EditInfoComponent } from './components/user/edit-info/edit-info.component';
import { PurchaseHistoryComponent } from './components/user/purchase-history/purchase-history.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    EditInfoComponent,
    PurchaseHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
