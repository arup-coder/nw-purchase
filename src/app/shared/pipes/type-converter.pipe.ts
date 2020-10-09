import {
  Pipe,
  PipeTransform,
} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {isNullOrUndefined} from 'util';


@Pipe({
  name: 'TypeConverter',
})
export class TypeConverter implements PipeTransform {
  public constructor(private currencyPipe: CurrencyPipe) {
  }

  transform(value: any, pipeToken: any): any {
    if (isNullOrUndefined(value)) {
      return ' ';
    }

    if (pipeToken === 'currency') {
      if (value !== null && value !== '') {
        const amount = +value;
        return this.currencyPipe.transform(amount, 'USD', 'symbol');
      } else {
        return value;
      }
    } else {
      return value;
    }
  }
}
