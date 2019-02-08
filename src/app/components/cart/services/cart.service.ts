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

  addToCart(cartProduct: ProductModel) {
    const copyCartProduct = Object.assign(cartProduct, {quantity:  --cartProduct.quantity,
                                              quantityInCart: ++cartProduct.quantityInCart,
                                              isAvailable: cartProduct.quantity === 0 ?
                                              (cartProduct.isAvailable = false) :
                                              (cartProduct.isAvailable = true)
                                              });

    const i = this.cartProducts.findIndex(p => p.id === cartProduct.id);

    if (i < 0) {
      this.cartProducts.push(copyCartProduct);
    }

    this.cartProducts.splice(i, 1, copyCartProduct);
    this.totalPrice += cartProduct.price;
    this.totalAmount++;
  }

  removeFromCart(cartProduct: ProductModel) {
    const i = this.cartProducts.findIndex(p => p.id === cartProduct.id);

    if (i > -1) {
      const {quantityInCart} = cartProduct;
      this.totalAmount -= quantityInCart;
      cartProduct.quantity += quantityInCart;
      cartProduct.quantityInCart = 0;
      this.cartProducts.splice(i, 1);
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

    const i = this.cartProducts.findIndex(p => p.id === cartProduct.id);

    if (i > -1) {
      cartProduct.quantity--;
      cartProduct.quantity === 0 ? (cartProduct.isAvailable = false) : (cartProduct.isAvailable = true);
      cartProduct.quantityInCart++;
    }

    this.totalAmount++;
    this.totalPrice += cartProduct.price;
  }

  decreaseCartProduct(cartProduct: ProductModel, index: number) {

    const i = this.cartProducts.findIndex(p => p.id === cartProduct.id);

    if (i > -1 && cartProduct.quantityInCart !== 0) {
      cartProduct.quantity++;
      cartProduct.quantity === 0 ? (cartProduct.isAvailable = false) : (cartProduct.isAvailable = true);
      cartProduct.quantityInCart--;
      this.totalAmount--;
      this.totalPrice -= cartProduct.price;
    }
    if (i > -1 && cartProduct.quantityInCart === 0) {
      this.removeFromCart(cartProduct);
    }
  }
}
