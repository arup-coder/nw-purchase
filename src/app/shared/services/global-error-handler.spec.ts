import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {GlobalErrorHandler} from './global-error-handler';
import {ViewActions} from 'src/app/abstract-actions/view.actions';

describe('GlobalErrorHandler', () => {
  let errorHandler: GlobalErrorHandler;
  let viewActions: ViewActions;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ViewActions],
    });
  });
  it('should create service', () => {
    viewActions = TestBed.get(ViewActions);
    errorHandler = new GlobalErrorHandler(viewActions);
    expect(errorHandler).toBeDefined();
  });
});
