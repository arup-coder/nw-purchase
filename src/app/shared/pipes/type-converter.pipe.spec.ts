import {CurrencyPipe} from '@angular/common';
import {TypeConverter} from './type-converter.pipe';
import {TestBed} from '@angular/core/testing';

describe('Type Converter Pipe', () => {
  let typeConverter: TypeConverter;
  let currencyPipe: CurrencyPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeConverter, CurrencyPipe],
    });
    currencyPipe = new CurrencyPipe('en');
    typeConverter = new TypeConverter(currencyPipe);
  });

  it('should transform if phone is 10 digits', () => {
    const amount = '10000';
    const pipeToken = 'currency';
    const result = typeConverter.transform(amount, pipeToken);
    expect(result).toEqual('$10,000.00');
  });

  it('should not transform when phone is not 10 digits', () => {
    const amount = '';
    const pipeToken = 'currency';
    const result = typeConverter.transform(amount, pipeToken);
    expect(result).toEqual('');
  });

  it('should not transform when phone is not 10 digits', () => {
    const amount = '';
    const pipeToken = 'dummy';
    const result = typeConverter.transform(amount, pipeToken);
    expect(result).toEqual('');
  });
});
