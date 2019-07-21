import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToFixed'
})
export class NumberToFixedPipe implements PipeTransform {

  transform(value, numbersToFixed: number) {
    return value || value === 0 ? value.toFixed(numbersToFixed) : '';
  }

}
