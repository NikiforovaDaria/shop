import { Injectable, InjectionToken } from '@angular/core';
import { RandomNumberService } from './random-number.service';

export const Data_Top3 = new InjectionToken<any[]>('DataTop3');
@Injectable()

export class GeneratorService {

  constructor(private length: number) { console.log(length)}

  getRandomSrting(): string {
    let length = this.length;
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    console.log(3434, text)
    return text;
  }
}

export let generatorServiceFactory = (randomNumberService: RandomNumberService) => {
  return new GeneratorService(randomNumberService.number);
}