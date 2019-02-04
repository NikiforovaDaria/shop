import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/productModel.model';
import { CartService } from 'src/app/components/cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[];

  constructor(private productService: ProductsService,
              private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onProductEmitter(product: ProductModel, i: number) {
    product.quantity--;
    product.quantity === 0 ? (product.isAvailable = false) : (product.isAvailable = true);
    this.cartService.addToCart(product, i);
  }
}
