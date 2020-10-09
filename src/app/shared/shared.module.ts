import {TypeConverter} from './pipes/type-converter.pipe';
import {PhonePipe} from './pipes/phone.pipe';
import {NgModule} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {LoadModuleDirective} from './directive/load-module.directive';

@NgModule({
  declarations: [
    PhonePipe,
    TypeConverter,
    LoadModuleDirective,
  ],
  exports: [
    PhonePipe,
    TypeConverter,
    LoadModuleDirective,
  ],
  providers: [
    CurrencyPipe,
  ],
})
export class SharedModule { }
