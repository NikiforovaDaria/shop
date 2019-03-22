import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/components/products/models/productModel.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

 
  get (): Array<any> {
    return JSON.parse(localStorage.getItem('products'));
  }

  set (key: string, data: Array<ProductModel>) {
    return localStorage.setItem(key, JSON.stringify(data));
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
