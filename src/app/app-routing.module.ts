import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes 
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { EditInfoComponent } from './components/user/edit-info/edit-info.component';
import { PurchaseHistoryComponent } from './components/user/purchase-history/purchase-history.component';
import { ContactUsComponent } from './components/general/contact-us/contact-us.component';
import { HomeComponent } from './components/general/home/home.component';
import { AboutComponent } from './components/general/about/about.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full'
  },{
    path: 'home',
    component: HomeComponent
  },{
    path: 'sign-in',
    component: SignInComponent
  },{
    path: 'sign-up',
    component: SignUpComponent
  },{
    path: 'history',
    component: PurchaseHistoryComponent
  },{
    path: 'profile',
    component: ProfileComponent
  },{
    path: 'profile/edit',
    component: EditInfoComponent
  },{
    path: 'about',
    component: AboutComponent
  },{
    path: 'contact-us',
    component: ContactUsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
