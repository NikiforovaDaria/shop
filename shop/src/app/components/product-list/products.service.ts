import { Injectable } from '@angular/core';
import { Product, Category } from '../product/product.model';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[];

  constructor() {
    this.products = [
      new Product('Apple','Fruit', 12, false, Category.Food),
      new Product('Apple','Fruit', 12, false, Category.Food),
      new Product('Apple','Fruit', 12, false, Category.Food)
    ]
  }

  getProducts () {
    return this.products;
  }
}
