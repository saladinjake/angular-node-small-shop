import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/product";
import { ProductService } from "../../services/product.service";
import { ProductsApiService } from '../../services/productsapi.service'

@Component({
  selector: 'app-player-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Product[];

  constructor(private productService: ProductsApiService) {  //ProductsService

  }

  ngOnInit() {
    // this.productService.getProducts().subscribe(products => this.products = products, err => console.log('error: ' + err));

    this.productService.fetchProducts();
    this.productService.getProducts().subscribe(data => {
      this.products = [...data];
    });
  }


  addItemToCart(item) {
    this.productService.addToCart(item._id);
  }
  itemInCart(item) {
    return this.productService.findItemInCart(item._id);
  }


}
