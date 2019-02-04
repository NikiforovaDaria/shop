import { Component, OnInit, Input, Output, EventEmitter, DoCheck  } from '@angular/core';

import { ProductModel } from '../../../products/models/productModel.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  quantity: number;

  @Input() cartProduct: ProductModel;
  @Input() i: number;
  @Output() increaseCartProductEmitter = new EventEmitter<ProductModel>();
  @Output() decreaseCartProductEmitter = new EventEmitter<ProductModel>();

  constructor(private cartService: CartService) {}

  ngOnInit() {
  }

  increaseCartProduct(cartProduct: ProductModel) {
    this.increaseCartProductEmitter.emit(cartProduct);
  }

  decreaseCartProduct(cartProduct: ProductModel, index: number) {
    this.decreaseCartProductEmitter.emit(
      cartProduct
    );
  }

  removeFromCart(cartProduct: ProductModel, index: number) {
    this.cartService.removeFromCart(cartProduct, index);
  }
}
