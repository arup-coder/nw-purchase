import { ViewActions } from './../../abstract-actions/view.actions';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { finalize, delay } from 'rxjs/operators';
import { EnvironmentService } from './environment-config';
import Utils from '../utils/utils';
import { GLOBAL_SETTINGS } from '../global-config';
import { IamObject } from '../custom_types/custom.types';

let users = [];

@Injectable()
export class AuthHttpInterceptorService implements HttpInterceptor {
  constructor(
    private viewActions: ViewActions,
    private envProps: EnvironmentService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Only set true for the URLs which need loader, no false case needed
    const isLoaderReq = Utils.searchString(req.url, GLOBAL_SETTINGS.apiNeedsLoader);
    let clonedReq: HttpRequest<any> = req;

    if (isLoaderReq) {
      this.viewActions.showLoader(true);
    }
    const oktaAuthObject = Utils.getItemSessionStorage('okta-token-storage');

    if ( GLOBAL_SETTINGS.checkUsersEligibility ) {
      if ( !this.isUserEligible() ) {
        alert('You\'ve reached this page in error. ' +
        'To view this page please go to the Purchases page under your account settings');
        return;
      }
    }

    if (oktaAuthObject) {
      clonedReq = req.clone({
        setHeaders: {
          Authorization: `${oktaAuthObject.accessToken.tokenType} ${oktaAuthObject.accessToken.accessToken}`,
        },
      });
    }

    return (isLoaderReq) ? next.handle(clonedReq).pipe(
      finalize(() => of('').pipe(
        delay(3000),
      ).subscribe(() => this.viewActions.showLoader(false)))
    ) : next.handle(clonedReq);
  }

  isUserEligible() {
    const userInfo: IamObject = Utils.getItemSessionStorage('iam.login');
    if ( this.envProps.configurations && this.envProps.configurations.production && this.envProps.configurations.allowedUsers ) {
      users = this.envProps.configurations.allowedUsers.split(',');
    }
    if (userInfo && users.length > 0) {
         /* This code to ensure that only certain users can see the modernized Purchases page in Production */
          return users.includes(userInfo.userName);
    }
    return true;
  }
}
