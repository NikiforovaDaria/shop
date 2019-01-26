import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

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
  @Output() addOneCartProductEmitter = new EventEmitter<{cartProduct: ProductModel}>();
  @Output() deleteOneCartProductEmitter = new EventEmitter<{ cartProduct: ProductModel }>();

  constructor(private cartService: CartService) {}

  ngOnInit() {
  }

  addOneCartProduct(cartProduct: ProductModel) {
    this.addOneCartProductEmitter.emit(
      {cartProduct}
    );
  }

  deleteOneCartProduct(cartProduct: ProductModel, index: number) {
    this.deleteOneCartProductEmitter.emit(
      { cartProduct }
    );
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }
}
