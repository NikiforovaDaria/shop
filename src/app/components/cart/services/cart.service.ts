import { Injectable } from '@angular/core';

import { ProductModel } from '../../products/models/productModel.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: ProductModel[];
  index: number;
  constructor() {
    this.cartProducts = [];
  }

  addToCart(product) {
    this.cartProducts.push(product);
  }

  getCartProduct() {
    return this.cartProducts;
  }

  removeFromCart(index: number) {
    if (index > -1) {
      this.cartProducts.splice(index, 1);
    }
}
}
