import { Component, OnInit } from '@angular/core';

enum Category {
  Food = 'Food',
  Drink = 'Drink',
  Toys = 'Toys'
}

export interface Product {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: Category;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, Product {
  constructor(public name: string, public description: string,
              public price: number, public isAvailable: boolean,
              public category: Category) { }

  ngOnInit() {
  }

  // name: string = 'Daria';
  // description: string = 'Description: my first Angular application';
  // price: number = 100;
  // isAvailable: boolean = true;
  // category: Category = Category.Food;

  onBuy(){
    console.log('You bought the goods')
  }
}
