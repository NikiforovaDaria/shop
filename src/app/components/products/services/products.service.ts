import { Injectable } from '@angular/core';

import { ProductModel, Category } from '../models/productModel.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: ProductModel[];

  constructor() {
    this.products = [
      new ProductModel('Apple', 'Fruit', 20, true, Category.Food, 0, 3, 1),
      new ProductModel('peach', 'Fruit', 120, false, Category.Food, 0, 4, 2),
      new ProductModel('Apple', 'Fruit', 300, true, Category.Food, 0, 2, 3)
    ];
  }

  getProducts () {
    return this.products;
  }
}
