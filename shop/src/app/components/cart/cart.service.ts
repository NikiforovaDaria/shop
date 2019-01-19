import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: Product[];

  constructor() {
    this.cartProducts = [];
  }

  add(product) {
    this.cartProducts.push(product);
  }

  getCartProduct() {
    return this.cartProducts;
  }
}
