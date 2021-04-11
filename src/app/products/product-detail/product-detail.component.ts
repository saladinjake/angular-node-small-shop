import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ProductsApiService } from "../../services/productsapi.service";
import {catchError, switchMap} from "rxjs/internal/operators";
import { Product } from "../../shared/product";

@Component({
  selector: 'app-player-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  private id: number;
  public  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductsApiService) {
  }

  addItemToCart(item) {
    this.productService.addToCart(item._id);
  }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => this.productService.getProduct(params['id'])),
      //catchError(err => console.log(err))

    ).subscribe(
      productResult => this.product = productResult,
      err => {
        if (err !== null) console.log(err)
      }
    );
  }

}
