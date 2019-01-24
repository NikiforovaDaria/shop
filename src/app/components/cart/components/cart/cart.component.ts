import { Component, OnInit, Input } from '@angular/core';

import { ProductModel } from '../../../products/models/productModel.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cartProduct: ProductModel;
  @Input() i: number;

  constructor(private cartService: CartService) {}

  ngOnInit() { }

  removeFromCart(index) {
    this.cartService.removeFromCart(index);
  }
}
