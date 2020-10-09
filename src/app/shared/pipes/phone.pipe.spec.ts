import {PhonePipe} from './phone.pipe';
import {TestBed} from '@angular/core/testing';

describe('Phone Pipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhonePipe],
    });
  });
  it('should transform if phone is 10 digits', () => {
    const pipe = new PhonePipe();
    const phone = '1000000000';
    const result = pipe.transform(phone);
    expect(result).toEqual('100.000.0000');
  });
  it('should not transform when phone is not 10 digits', () => {
    const pipe = new PhonePipe();
    const phone = '100000000';
    const result = pipe.transform(phone);
    expect(result).toEqual('100000000');
  });
});
