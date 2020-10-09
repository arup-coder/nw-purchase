import {TestBed} from '@angular/core/testing';
import {ErrorHandlerService} from './error-handler.service';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ViewActions} from 'src/app/abstract-actions/view.actions';
describe('ErrorHandlerService', () => {
  let errorHandler: ErrorHandlerService;
  let viewActions: ViewActions;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ViewActions],
    });
  });
  it('should create service', () => {
    viewActions = TestBed.get(ViewActions);
    errorHandler = new ErrorHandlerService(viewActions);
    expect(errorHandler).toBeDefined();
  });
});

