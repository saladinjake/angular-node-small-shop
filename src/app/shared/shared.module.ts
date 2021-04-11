import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppnavComponent } from "./appnav/appnav.component";
import { CartComponent } from "./cart/cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { OrderComponent } from "./order/order.component";
import {RouterModule} from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule ,
    SharedRoutingModule

  ],
  declarations: [
    AppnavComponent,
    CartComponent,
    CheckoutComponent,
    OrderComponent
  ],
  exports: [
  AppnavComponent,
  CartComponent,
  CheckoutComponent,
  OrderComponent
],
 schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
