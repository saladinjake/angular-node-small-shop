import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsModule} from "./products/products.module";
import {ProductsRoutingModule} from "./products/products-routing.module";
import {SharedModule} from "./shared/shared.module";
import {ServicesModule} from "./services/services.module";
import { AuthModule } from './auth/auth.module';

import { AuthGuard } from './auth/guards/auth-guard.service';

import { HTTP_INTERCEPTORS }  from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,

    ProductsRoutingModule,
    ProductsModule,

    SharedModule,
    ServicesModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
