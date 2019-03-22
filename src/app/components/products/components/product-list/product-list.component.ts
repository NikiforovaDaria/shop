import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/productModel.model';
import { CartService } from 'src/app/components/cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // products: ProductModel[];
  products: Promise<Array<ProductModel>>;

  constructor(private router: Router,
              private productService: ProductsService,
              private cartService: CartService) { }

  ngOnInit() {

    this.products = this.productService.getProducts();

  }

  onProductEmitter(product: ProductModel) {
    this.cartService.addToCart(product);
  }

  onAboutProductEmitter(product: ProductModel){
    const link = ['/product', product.id];
    this.router.navigate(link);
  }
}
