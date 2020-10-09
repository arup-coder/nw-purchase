import {Injectable} from '@angular/core';
import {ViewActions} from 'src/app/abstract-actions/view.actions';


@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private viewActions: ViewActions) {
  }

  handleError(error: any) {
    this.viewActions.setException(error);
  }

  removeError() {
    let error: any;
    this.viewActions.setException(error);
  }
}
