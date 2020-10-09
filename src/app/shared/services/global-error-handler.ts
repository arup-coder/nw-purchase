import {Injectable} from '@angular/core';
import {ViewActions} from 'src/app/abstract-actions/view.actions';
import {ErrorHandler} from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private viewActions: ViewActions) {
  }

  handleError(error: any) {

  }
}

