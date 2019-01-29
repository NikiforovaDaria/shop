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
    cartProduct.quantityInCart++;
    this.totalAmount++;
    this.totalPrice += cartProduct.price;
  }

  removeFromCart(cartProduct: ProductModel, index: number) {
    if (index > -1) {
      const {quantityInCart} = cartProduct;
      this.totalAmount -= quantityInCart;
      cartProduct.quantity += quantityInCart;
      cartProduct.quantityInCart = 0;
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

  getIsAvaliable() {

  }

  increaseCartProduct(cartProduct: ProductModel) {
    cartProduct.quantity--;
    cartProduct.quantityInCart++;
    this.totalAmount++;
    this.totalPrice += cartProduct.price;
  }

  decreaseCartProduct(cartProduct: ProductModel, index: number) {
    if (cartProduct.quantityInCart !== 0) {
      cartProduct.quantityInCart--;
      cartProduct.quantity++;
      this.totalAmount--;
      this.totalPrice -= cartProduct.price;
    }
    if (cartProduct.quantityInCart === 0) {
      this.removeFromCart(cartProduct, index);
    }
  }

}
