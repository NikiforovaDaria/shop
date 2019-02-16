import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GeneratorService {
  constructor() { }

  getRandomSrting(randomNumber: number): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < randomNumber; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
