import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
  transform(array: Array<string>, property: string): Array<string> {
    return array.sort((a, b) => b[property] - a[property])
  }
}
