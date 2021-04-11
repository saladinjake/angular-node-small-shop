import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from '../../services/productsapi.service';


@Component({
  selector: 'app-appnav',
  templateUrl: './appnav.component.html',
  styleUrls: ['./appnav.component.css']
})
export class AppnavComponent implements OnInit {
  cart = [];
  constructor(private productsService: ProductsApiService) { }

  ngOnInit() {
    this.productsService.getCart().subscribe(data => {
      this.cart = [...data];
    });
  }

}
