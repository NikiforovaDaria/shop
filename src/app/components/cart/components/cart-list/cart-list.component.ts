import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/components/products/models/productModel.model';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  measures = ['price', 'quantityInCart', 'name'];
  selectedMeasure = 'price';

  cartProducts: ProductModel[];

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getCartProduct();
  }

  get totalPrice () {
    return this.cartService.getTotalPrice();
  }

  get totalAmount() {
    return this.cartService.getTotalAmount();
  }

  onIncreaseCartProductEmitter(cartProduct: ProductModel) {
    this.cartService.increaseCartProduct(cartProduct);
  }

  onDecreaseCartProductEmitter(cartProduct: ProductModel, i: number) {
    this.cartService.decreaseCartProduct(cartProduct, i);
  }

  onGoToOrder(){
    const link = ['cart/order'];
    this.router.navigate(link);
  }
}
