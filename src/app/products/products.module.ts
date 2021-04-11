import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';

import { AuthGuard } from '../auth/guards/auth-guard.service';
@NgModule({
  imports: [
    ProductsRoutingModule,
    CommonModule,
    SharedModule,
  ],
  declarations: [ProductListComponent, ProductDetailComponent],
  // providers:[AuthGuard]
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]

})


export class ProductsModule { }
