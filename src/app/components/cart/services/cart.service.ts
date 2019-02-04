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

  addToCart(cartProduct, i) {

    const copyCartProduct: ProductModel = Object.assign({}, cartProduct, {id: i});
    console.log("price: ", copyCartProduct.price);

    console.log('copyCartProduct: ', copyCartProduct);
    console.log('this.cartProducts.: ', this.cartProducts);

    const x = this.cartProducts.findIndex(el => {
      return el.id === i;
    });
    if (x < 0) {
      this.cartProducts.push(copyCartProduct);
    }
    // cartProduct.quantityInCart++;
    this.totalAmount++;
    this.totalPrice += cartProduct.price;
    console.log('this.totalPrice: ', this.totalPrice);

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

  increaseCartProduct(cartProduct: ProductModel) {
    cartProduct.quantity--;
    cartProduct.quantity === 0 ? (cartProduct.isAvailable = false) : (cartProduct.isAvailable = true);
    cartProduct.quantityInCart++;
    this.totalAmount++;
    this.totalPrice += cartProduct.price;
  }

  decreaseCartProduct(cartProduct: ProductModel, index: number) {
    if (cartProduct.quantityInCart !== 0) {
      cartProduct.quantity++;
      cartProduct.quantity === 0 ? (cartProduct.isAvailable = false) : (cartProduct.isAvailable = true);
      cartProduct.quantityInCart--;
      this.totalAmount--;
      this.totalPrice -= cartProduct.price;
    }
    if (cartProduct.quantityInCart === 0) {
      this.removeFromCart(cartProduct, index);
    }
  }

}
