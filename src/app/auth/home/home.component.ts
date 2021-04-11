import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/product";
// import {ProductService} from "../../services/product.service";
import { ProductsApiService } from "../../services/productsapi.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cart = [];
  public products: Product[];

  constructor(private productService: ProductsApiService) {

  }

  ngOnInit() {
    this.productService.fetchProducts();
    this.productService.getProducts().subscribe(data => {
      console.log(data)
      this.products = [...data].slice(0,12);
    });

    this.productService.getCart().subscribe(data => {
      this.cart = [...data];
    });

  }

  addItemToCart(item) {
    this.productService.addToCart(item._id);
  }
  itemInCart(item) {
    return this.productService.findItemInCart(item._id);
  }

}
