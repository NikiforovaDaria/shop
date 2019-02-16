import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  constructor() { }

  number: number;

  

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  generate () {
    this.number = this.getRandomInt(1, 50);
    console.log(1212, this.number);
    return this.number;
  }
}
