import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { AuthGuard } from '../auth/guards/auth-guard.service';
@NgModule({
  imports: [
    ProductsRoutingModule,
    CommonModule,
  ],
  declarations: [ProductListComponent, ProductDetailComponent],
  // providers:[AuthGuard]

})


export class ProductsModule { }
