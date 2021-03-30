import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule} from "@angular/forms"
import {Routes, RouterModule} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    AuthRoutingModule,
  ],
  declarations: [HomeComponent, LoginComponent, RegisterComponent, PageNotFoundComponent]
})
export class AuthModule {
}
