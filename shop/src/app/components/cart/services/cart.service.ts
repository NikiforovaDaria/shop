import { Injectable } from '@angular/core';

import { ProductModel } from '../../products/models/productModel.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: ProductModel[];

  constructor() {
    this.cartProducts = [];
  }

  addToCart(product) {
    console.log(product);
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
