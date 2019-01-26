import { Injectable } from '@angular/core';

import { ProductModel } from '../../products/models/productModel.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: ProductModel[];
  totalPrice: number;
  totalAmount: number;

  constructor() {
    this.cartProducts = [];
    this.totalAmount = 0;
    this.totalPrice = 0;
  }

  addToCart(cartProduct) {
    if (!this.cartProducts.includes(cartProduct)) {
      this.cartProducts.push(cartProduct);
    }
    this.addOneCartProduct(cartProduct);
  }

  removeFromCart(index: number) {
    if (index > -1) {
      this.totalAmount -= this.cartProducts[index].quantityInCart;
      this.cartProducts[index].quantityInCart = 0;
      this.cartProducts.splice(index, 1);
    }
  }

  getCartProduct() {
    return this.cartProducts;
  }

  getTotalAmount() {
    return this.totalAmount;
  }
  getTotalPrice() {
    return this.totalPrice = this.cartProducts.reduce((currentValue: number, cartProduct: ProductModel) => {
      return (currentValue = currentValue + cartProduct.price * cartProduct.quantityInCart);
    }, 0);
  }

  addOneCartProduct(cartProduct: ProductModel) {
    cartProduct.quantityInCart++;
    this.totalAmount++;
    this.totalPrice += cartProduct.price;
  }

  deleteOneCartProduct(cartProduct: ProductModel, index: number) {
    if (cartProduct.quantityInCart !== 0) {
      cartProduct.quantityInCart--;
      this.totalAmount--;
      this.totalPrice -= cartProduct.price;
    }
    if (cartProduct.quantityInCart === 0) {
      this.removeFromCart(index);
    }
  }

}
