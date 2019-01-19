import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../../../products/models/productModel.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: ProductModel[];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartProducts = this.cartService.getCartProduct();
  }
}
