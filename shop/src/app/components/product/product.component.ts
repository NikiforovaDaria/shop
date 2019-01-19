import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private cartService: CartService) { }
  @Input() product: Product;

  ngOnInit() {
  }

  onBuy() {
    console.log('You bought the goods');
  }

  addToCard(product) {
    this.cartService.add(product);
  }

}
