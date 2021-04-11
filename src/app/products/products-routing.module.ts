import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


import { AuthGuard } from '../auth/guards/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    // canActivate:[ AuthGuard],
  },
  {
    path: ':id',
    component: ProductDetailComponent,
    // canActivate:[ AuthGuard],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class ProductsRoutingModule { }
