import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/productModel.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[];

  constructor(private productService: ProductsService ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
