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
import {AddProductComponent} from './components/admin/add-product/add-product.component';
import { AdminSignInComponent } from './components/admin/admin-sign-in/admin-sign-in.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { AddStockComponent } from './components/admin/add-stock/add-stock.component';
import { ListProductsComponent } from './components/store/list-products/list-products.component'
import { CartComponent } from './components/store/cart/cart.component';
import { ProductComponent } from './components/store/product/product.component';
import { ListUsersComponent } from './components/admin/list-users/list-users.component';
import { ContentManagementComponent } from './components/admin/content-management/content-management.component';
import { ClientListComponent } from './components/admin/client-list/client-list.component';
import { SuccessComponent } from './components/store/success/success.component';
import { SearchComponent } from './components/general/search/search.component';
import { CheckoutComponent } from './components/store/checkout/checkout.component';

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
  },{
    path: 'admin/add-product',
    component: AddProductComponent
  },{
    path: 'admin/sign-in',
    component: AdminSignInComponent
  },{
    path: 'admin',
    component: AdminHomeComponent,
    pathMatch: 'full'
  },{
    path: 'admin/product-list',
    component: ProductListComponent,
  },{
    path: 'admin/add-stock',
    component: AddStockComponent,
  },{
    path: 'store',
    component: ListProductsComponent,
  },{
    path: 'cart',
    component: CartComponent,
  }
  ,{
    path: 'store/product',
    component: ProductComponent,
  },{
    path: 'admin/list-admin-users',
    component: ListUsersComponent,
  },{
    path: 'admin/content-manager',
    component: ContentManagementComponent,
  },{
    path: 'admin/client-list',
    component: ClientListComponent
  },
  {path: 'store/success',
    component: SuccessComponent,
  },
  {path: 'search',
    component: SearchComponent,
  },
  {path: 'store/checkout',
    component: CheckoutComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
