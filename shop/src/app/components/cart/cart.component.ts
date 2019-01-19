import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product, Category } from '../product/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: Product[];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartProducts = this.cartService.getCartProduct();
  }
}
