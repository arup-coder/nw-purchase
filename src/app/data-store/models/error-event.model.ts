export interface IErrorEvent {
    errorPayload: IErrorLog;
    errorState: boolean;
  }

export interface IErrorLog {
    component: string;
    errorSource: string;
    errorDescription: string;
  }

export class ErrorEvent implements IErrorEvent {
    errorPayload: IErrorLog;
    errorState: boolean;

    constructor(
        errorPayload = {component: '', errorSource: '', errorDescription: ''},
        errorState = false,
    ) {
      this.errorPayload = errorPayload;
      this.errorState = errorState;
    }
}
