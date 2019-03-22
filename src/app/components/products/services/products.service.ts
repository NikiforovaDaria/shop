import { Injectable } from '@angular/core';

import { ProductModel, Category } from '../models/productModel.model';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';


const products = [
  new ProductModel('Apple', 'Fruit', 20, true, Category.Food, 0, 5, 1),
  new ProductModel('peach', 'Fruit', 120, false, Category.Food, 0, 4, 2),
  new ProductModel('Apple', 'Fruit', 300, true, Category.Food, 0, 2, 3)
];
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  maxId:number;
  productsPromise;

  constructor(private localStorageService: LocalStorageService) {
    const localStorage = this.localStorageService.get();
    this.productsPromise = Promise.resolve(localStorage);
   }

  getProducts ():  Promise<ProductModel[]> {
    return this.productsPromise;
  }


  getProduct(id: number | string): Promise<ProductModel> {
    return this.getProducts()
      .then(product => {
        this.maxId = products[products.length-1].id + 1;
        return product.find(p => p.id === +id)})
      .catch(() => Promise.reject('Error in getProduct method'));
  }

  updateProduct(product: ProductModel){
    this.localStorageService.set('products', products)
    const idx = products.findIndex(p => p.id === product.id);
    if (idx > -1) {
      products.splice(idx, 1, product);
    }
  }

  createProduct(product: ProductModel){
    products.push(product);
    this.localStorageService.set('products', products)
  }
}
