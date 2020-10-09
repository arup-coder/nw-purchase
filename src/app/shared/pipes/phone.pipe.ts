import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(num) {
    if (num != null && num.length === 10) {
      return `${num.substr(0, 3)}.${num.substr(3, 3)}.${num.substr(6, 4)}`;
    } else {
      return num;
    }
  }
}
