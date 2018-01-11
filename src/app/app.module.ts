import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-4-data-table';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';

import { environment } from '../environments/environment';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AppComponent } from './shared/components/app.component';
import { BsNavbarComponent } from './shared/components/bs-navbar/bs-navbar.component';
import { CheckOutComponent } from './shared/components/check-out/check-out.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { MyOrdersComponent } from './shared/components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './shared/components/order-success/order-success.component';
import { ProductFilterComponent } from './shared/components/products/product-filter/product-filter.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { ShippingFormComponent } from './shared/components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shared/components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './shared/components/shopping-cart/shopping-cart.component';
import { AuthGuard } from './shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'my/orders', component: MyOrdersComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },

      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },


      { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard]},


    ])
  ],
  providers: [
    AdminAuthGuard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
