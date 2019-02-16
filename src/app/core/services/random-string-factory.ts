import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const Random_String = new InjectionToken<any[]>('RandomString');

export function RandomStringFactory(length: number) {
  return function (data: GeneratorService): any {
    return data
      .getRandomSrting(length);
  };
}
