import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  public products: Product[];

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => this.products = products.slice(0, 8), err => console.log('error: ' + err));
  }

}
