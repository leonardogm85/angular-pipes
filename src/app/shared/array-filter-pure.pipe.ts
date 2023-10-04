import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilterPure'
})
export class ArrayFilterPurePipe implements PipeTransform {

  transform(values: string[], pattern?: string): string[] {
    if (values.length === 0 || !pattern) {
      return values;
    }

    return values.filter(value => value.toLocaleLowerCase().indexOf(pattern.toLocaleLowerCase()) >= 0);
  }

}
