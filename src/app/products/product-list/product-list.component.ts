import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-player-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Product[];

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => this.products = products, err => console.log('error: ' + err));

    // this.productsService.fetchProducts();
    // this.productsService.getProducts().subscribe(data => {
    //   this.products = [...data];
    // });
  }


  addItemToCart(item) {
    this.productsService.addToCart(item._id);
  }
  itemInCart(item) {
    return this.productsService.findItemInCart(item._id);
  }


}
