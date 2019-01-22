export interface IProduct {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: Category;
}

export enum Category {
  Food = 'Food',
  Drink = 'Drink',
  Toys = 'Toys'
}

export class ProductModel implements IProduct {
  constructor(public name: string, public description: string,
              public price: number, public isAvailable: boolean,
              public category: Category) { }
}
