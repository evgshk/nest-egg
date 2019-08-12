import { Pipe, PipeTransform } from '@angular/core';
import { includes }            from 'lodash';

@Pipe({
  name: 'valueTransform'
})
export class ValueTransformPipe implements PipeTransform {

  transform(value: any, option: string = 'default'): string {

    if (!value && value !== 0) {
      return '';
    }

    switch (option) {
      default:
        return value;
      case 'default':
        return value;
      case 'array':
        return value.length === 0 ? '-' : value.join(', ');
      case 'date':
        const date = new Date(value);
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
      case 'rubleValue':
        let coins = '';
        if (includes(value, ',')) {
          coins = value.substring(value.indexOf(','));
          value = value.substring(0, value.indexOf(','));
        }
        return value === 0 || value === '-'
          ? '-'
          : value.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + coins;
      case 'phone':
        /**
         * Pipe transforms input value into +7(xxx)xxx-xx-xx value
         * Due to number-only-directive it is allowed to input only numbers
         * ---
         * input - is an entry parameter, which can contain '+','-','(',')' symbols
         * inputOnlyNumbers - is an input value without anything that is not a number
         */
        const valueOnlyNumbers = +value.toString().replace(/\D/g, '');
        const lastNumber = valueOnlyNumbers ? +valueOnlyNumbers.toString().substr(-1) : null;
        const lastSymbol = value ? value.substr(-1) : null;

        if (value === '+' || value === '+7') {
          return null;
        }

        switch (valueOnlyNumbers.toString().length) {
          case 1:
            return lastNumber === 4 || lastNumber === 9 ? '+7 (' + lastNumber : lastSymbol === ' ' ? '' : '+7 (';
          case 2:
            return lastNumber === 4 || lastNumber === 9 ? '+7 (' + lastNumber : '+7 (9';
          case 3:
            return value;
          case 4:
            return (lastSymbol !== ')' && lastSymbol !== ' ') ? value + ') ' : value.substr(0, value.length - 3);
          case 5:
            return value;
          case 6:
            return value;
          case 7:
            return lastSymbol !== '-' ? value + '-' : value;
          case 8:
            return value;
          case 9:
            return lastSymbol !== '-' ? value + '-' : value;
          case 10:
            return value;
          case 11:
            return value;
        }
        return '';
    }
  }

}
