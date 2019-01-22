import { Component, OnInit, Input } from '@angular/core';

import { ProductModel } from '../../models/productModel.model';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  onBuy() {
    console.log('You bought the goods');
  }

  addToCard(product) {
    this.cartService.addToCart(product);
  }
}
