import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProductModel } from '../../models/productModel.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() productEmitter = new EventEmitter <{product: ProductModel}> ();

  constructor() {}

  ngOnInit() {}

  onBuy() {
    console.log('You bought the goods');
  }

  addToCart(product: ProductModel) {
    this.productEmitter.emit(
      {product}
    )
  }
}
