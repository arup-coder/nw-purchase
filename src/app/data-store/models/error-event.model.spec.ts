import {ErrorEvent} from './error-event.model';
import {async, TestBed} from '@angular/core/testing';

describe('Error Event Model', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [],
    });
  }));

  beforeEach(() => {

  });

  it('should create alert model', () => {
    let instance = new ErrorEvent();
    expect(JSON.stringify(instance.errorPayload)).toEqual(JSON.stringify({component: '', errorSource: '', errorDescription: ''}));
    expect(instance.errorState).toEqual(false);

    instance = new ErrorEvent({component: 'test', errorSource: 'test', errorDescription: 'test'}, true);
    expect(JSON.stringify(instance.errorPayload))
        .toEqual(JSON.stringify({component: 'test', errorSource: 'test', errorDescription: 'test'}));
    expect(instance.errorState).toEqual(true);
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
