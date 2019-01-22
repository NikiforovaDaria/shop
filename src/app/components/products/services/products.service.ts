import { Injectable } from '@angular/core';

import { ProductModel, Category } from '../models/productModel.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: ProductModel[];

  constructor() {
    this.products = [
      new ProductModel('Apple', 'Fruit', 12, false, Category.Food),
      new ProductModel('peach', 'Fruit', 12, true, Category.Food),
      new ProductModel('Apple', 'Fruit', 12, false, Category.Food)
    ];
  }

  getProducts () {
    return this.products;
  }
}
