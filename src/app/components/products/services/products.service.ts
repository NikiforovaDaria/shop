import { Injectable } from '@angular/core';

import { ProductModel, Category } from '../models/productModel.model';


const products = [
  new ProductModel('Apple', 'Fruit', 20, true, Category.Food, 0, 5, 0),
  new ProductModel('peach', 'Fruit', 120, false, Category.Food, 0, 4, 1),
  new ProductModel('Apple', 'Fruit', 300, true, Category.Food, 0, 2, 2)
];

const productsPromise = Promise.resolve(products);
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts (): Promise<ProductModel[]> {
    return productsPromise;
  }

  getProduct(id: number | string): Promise<ProductModel> {
    return this.getProducts()
      .then(product => product.find(p => p.id === +id))
      .catch(() => Promise.reject('Error in getProduct method'));
  }

}
