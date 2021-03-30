import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// import {PlayersRoutingModule} from "./products/products-routing.module";
import {AppComponent} from "./app.component";
import {ProductsModule} from "./products/products.module";
import { AuthModule } from "./auth//auth.module";

import {HomeComponent} from "./auth/home/home.component";
import {LoginComponent} from "./auth/login/login.component";

import { AuthGuard } from './auth/guards/auth-guard.service';
import { HTTP_INTERCEPTORS }  from '@angular/common/http';

const routes: Routes = [
  {
    path: '',

    component: HomeComponent
  },

  {
    path: 'auth',

  loadChildren: () => AuthModule,
  },


  {
    path: 'products',
    // canLoad: [AuthGuard],
    loadChildren: () => ProductsModule,


  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [AuthGuard],
})
export class AppRoutingModule {


}
