import { Injectable } from '@angular/core';

import { ProductModel } from '../../products/models/productModel.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: ProductModel[];
  totalPrice: number;

  constructor() {
    this.cartProducts = [];
  }

  addToCart(cartProduct) {
    if(cartProduct.isAvailable){
      this.cartProducts.push(cartProduct);
    }
  }

  getCartProduct() {
    return this.cartProducts;
  }

  getTotalPrice(){
    return this.totalPrice = this.cartProducts.reduce((runningValue: number, cartProducts: ProductModel) => {
      return runningValue = runningValue + ((cartProducts.price));
    }, 0);
  }

  removeFromCart(index: number) {
    if (index > -1) {
      this.cartProducts.splice(index, 1);
    }
  }
  addOnecartProduct(cartProduct: ProductModel) {
    this.totalPrice += cartProduct.price;
    return this.totalPrice
  }
}
