import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product, Category } from '../product/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  isEmpty: boolean;
  cartProduct: string

  constructor() { }

  ngOnInit() {
    // this.cartProduct = this.service.cartProduct;
    this.cartProduct ='hello world'
  }

}
