import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';

import { ProductModel } from '../../models/productModel.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, DoCheck {

  @Input() product: ProductModel;
  @Input() i: number;
  @Output() productEmitter = new EventEmitter <ProductModel> ();

  constructor() {}

  ngOnInit() {}

  ngDoCheck () {
    this.product.quantity === 0 ? (this.product.isAvailable = false) : (this.product.isAvailable = true);

  }
  toBuy() {
    console.log('You bought the goods');
  }

  addToCart(product: ProductModel) {
    this.productEmitter.emit(
      product
    );
  }
}
