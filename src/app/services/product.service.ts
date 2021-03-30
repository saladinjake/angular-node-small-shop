import {Injectable} from '@angular/core';
import {Product} from "../shared/product";
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private product: Product[] = [
    {id: 1, address: 'dark energy vibes 18', name: 'dark energy', image:'./assets/images/products/big/1.jpg'},
    {id: 2, address: 'darkness 18', name: 'darkness', image:'./assets/images/products/big/2.jpg'},
    {id: 3, address: 'midnight haunter 159', name: 'haunter', image:'./assets/images/products/big/3.jpg'},
    {id: 4, address: 'magic  18', name: 'boe glases', image:'./assets/images/products/big/4.jpg'},
    {id: 5, address: 'boe  18', name: 'boe glases', image:'./assets/images/products/big/5.jpg'},
    {id: 6, address: 'salami shoes  159', name: 'salami', image:'./assets/images/products/big/6.jpg'},
    {id: 7, address: 'hades 18', name: 'hades glases', image:'./assets/images/products/big/7.jpg'},
    {id: 8, address: 'demon knights 18', name: 'demon knights', image:'./assets/images/products/big/8.jpg'},
    {id: 9, address: 'orgres 159', name: 'orgres 159', image:'./assets/images/products/big/9.jpg'},
    {id: 10, address: 'kilijoe 18', name: 'killijoe', image:'./assets/images/products/big/10.jpg'},
    {id: 11, address: 'madness glasses 18', name: 'NMandman', image:'./assets/images/products/big/11.jpg'},
    {id: 12, address: 'zobies glasses 159', name: 'zombie specs', image:'./assets/images/products/big/12.jpg'},
    {id: 13, address: 'witch haunter 18', name: 'witches', image:'./assets/images/products/big/13.jpg'},
    {id: 14, address: 'salvation glass 18', name: 'solomon grandy', image:'./assets/images/products/big/3.jpg'},
    {id: 15, address: 'butt glasses 159', name: 'qwert',image:'./assets/images/products/big/1.jpg'},
  ];

  constructor() {
  }

  public getProducts(): Observable<Product[]> {
    return of(this.product);
  }

  public getProduct(id: number) : Observable<Product> {
    return of(this.product.filter(p => p.id === id)[0]);
  }
}
