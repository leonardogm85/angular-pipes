import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string): string {
    return value
      .split(' ')
      .reduce((accumulator, currentValue) => `${accumulator} ${this.capitalize(currentValue)}`, '');
  }

  capitalize(value: string): string {
    return value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();
  }

}
