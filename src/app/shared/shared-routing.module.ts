import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';

export const APP_ROUTES: Routes = [

  { path: 'orders', component:  OrderComponent},
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
];




@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule],

})
export class SharedRoutingModule { }
