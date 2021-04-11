import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {  ElementRef,
   TemplateRef, ViewRef,
    ComponentRef, ViewChild,
    ViewContainerRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,  AfterViewInit {
  title = 'Jumanji Stores';
  @ViewChild("notifsuccess", {read: ElementRef}) notifsuccess: ElementRef;
  @ViewChild("notiffail", {read: ElementRef}) notiffail: ElementRef;
  showfailure = false
  showsuccess = false;

  user: User = {
    email: '',
    password: ''
  };

  public slideout: null;


  constructor(private authService: AuthService, private _router: Router) { }

  ngOnInit() {

  }
  ngAfterViewInit(){
     // this.slideout = this.notifsuccess.nativeElement;

  }
  login(theUser: User) {
    console.log(theUser);
    this.authService.login(theUser).subscribe(data => {
      console.log(data);

        setTimeout(() => {
          // this.showsuccess= true;
          this._router.navigate(['/products']);
          localStorage.setItem('user', JSON.stringify(data));
        }, 4000);

      
    });
  }
}
