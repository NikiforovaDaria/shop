import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProductModel } from '../../models/productModel.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  @Input() product: ProductModel;
  @Input() i: number;
  @Output() productEmitter = new EventEmitter <ProductModel> ();

  constructor() {}

  ngOnInit() {}

  toBuy() {
    console.log('You bought the goods');
  }

  addToCart(product: ProductModel) {
    this.productEmitter.emit(
      product
    );
  }
}
