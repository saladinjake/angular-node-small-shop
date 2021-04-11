import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule} from "@angular/forms"
import {Routes, RouterModule} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    AuthRoutingModule,
  ],
  declarations: [HomeComponent, LoginComponent, RegisterComponent, PageNotFoundComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class AuthModule {
}
