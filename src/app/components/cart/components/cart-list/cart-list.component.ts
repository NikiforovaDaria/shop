import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ProductModel } from 'src/app/components/products/models/productModel.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, AfterContentChecked {

  cartProducts: ProductModel[];
  totalPrice: number;
  totalAmount: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getCartProduct();
  }

  ngAfterContentChecked()  {
    this.totalAmount = this.cartService.getTotalAmount();
    this.totalPrice = this.cartService.getTotalPrice();
  }
  onIncreaseCartProductEmitter(cartProduct: ProductModel) {
    this.cartService.increaseCartProduct(cartProduct);
  }

  onDecreaseCartProductEmitter(cartProduct: ProductModel, i: number) {
    this.cartService.decreaseCartProduct(cartProduct, i);
  }
}
