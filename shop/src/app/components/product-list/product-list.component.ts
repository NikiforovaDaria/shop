import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductsService ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
