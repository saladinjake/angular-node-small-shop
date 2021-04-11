import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from '../../services/productsapi.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart = [];
  cartTotal = 0;
  checkoutForm = this.fb.group({
    firstName: ['saladin', Validators.required],
    lastName: ['saladin', Validators.required],
    email: ['saladin@gmail', Validators.required],
    addressOne: ['', Validators.required],
    addressTwo: [''],
    country: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required],
  });
  constructor(private router: Router, private fb: FormBuilder, private productsService: ProductsApiService) { }

  ngOnInit() {
    this.productsService.getCart().subscribe(data => {
      this.cart = [...data];
      this.cartTotal = this.cart.reduce((acc, cur) => acc + Number(cur.price), 0);
    });
  }
  doCheckout() {
    const order = {
      ...this.checkoutForm.value,

      items: this.cart,
      total:this.cartTotal
    };
    console.log(order)
    this.productsService.checkout(order).subscribe(res => {
      const snackbar = document.getElementById('snackbar');
      snackbar.innerHTML = 'Order placed successfully';
      snackbar.className = 'show';
      setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', '');
        this.productsService.clearCart();
        this.productsService.resetCart();
        this.router.navigate(['/products']);
      }, 3000);
    });
  }
}
