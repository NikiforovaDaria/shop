import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  get (): Array<any> {
    return JSON.parse(localStorage.getItem('products'));
  }

  set (key: string, data: Array<any>) {
    return localStorage.setItem(key, JSON.stringify(data));
  }

  removeItem(id: number) {
    let products = this.get ();
    products = products.filter(p => p.id !== id);
  }
}
