import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  @Input() product: Product;
  @Output() cartEmitter = new EventEmitter<{product: Product}>();

  onBuy(){
    console.log('You bought the goods')
  }

  addToCard(product) {
    this.cartEmitter.emit({product})
  }

}
