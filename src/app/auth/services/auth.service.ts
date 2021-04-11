import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
  import { retry, catchError } from 'rxjs/operators';

import {  HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public httpOptions:{headers:HttpHeaders};
  constructor(private _router: Router, private _http: HttpClient) {

      // Http Options
          this.httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          }
   }
  register(user) {
    return this._http.post('http://localhost:4000/api/register', user, this.httpOptions);
    // localStorage.setItem('user', user);
  }
  login(user) {
    return this._http.post('http://localhost:4000/api/login', user, this.httpOptions);
  }
  logout() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }
  isAuthenticated() {
    return localStorage.getItem('user');
  }


      // Handle API errors
   handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      };
}
