import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import {  HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  _products = [];
  products = [];
  _cart = [];
  productsSub;
  cartSub;
  constructor(private http: HttpClient,private _router: Router, private _auth: AuthService) {
    this.productsSub = new BehaviorSubject<any[]>(this._products);
    this.cartSub = new BehaviorSubject<any[]>(this._cart);
  }




  fetchProducts() {
    // let token;
    // if (this._auth.isAuthenticated()) {
    //   const user = JSON.parse(this._auth.isAuthenticated());
    //   token = user.token ? user.token : '';
    // }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Authorization': token
      })


    }

    this.http.get<any[]>('http://localhost:4000/products',httpOptions).subscribe(data => {
      this._products = [...data];
      this.products =this._products;
      this.productsSub.next([...this._products]);
    });
  }

  getProducts() {
    return this.productsSub.asObservable();
  }
  getCart() {
    return this.cartSub.asObservable();
  }
  addToCart(id) {
    const product = this.findItemInProducts(id);
    if (product.length !== 0) {
      if (this.findItemInCart(id).length) {
        this.removeFromCart(id);
      } else {
        this._cart.push(product[0]);
      }
      this.cartSub.next([...this._cart]);
    }
  }
  removeFromCart(id) {
      if (this.findItemInCart(id).length) {
        const item = this.findItemInCart(id)[0];
        const index = this._cart.indexOf(item);
        this._cart.splice(index, 1);
      }
      this.cartSub.next([...this._cart]);
  }
  clearCart() {
    this.cartSub.next([]);
}
  findItemInCart(id) {
    const item = this._cart.filter(product => product._id === id);
    return item;
  }
  findItemInProducts(id) {
    const item = this._products.filter(product => product._id === id);
    return item;
  }
  checkout(data) {
    return this.http.post('/checkout', data);
  }
}
