import { ViewActions } from 'src/app/abstract-actions/view.actions';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EnvironmentService} from '../shared/services/environment-config';
import { GLOBAL_SETTINGS } from '../shared/global-config';
import { DateRangeETR, IEtrParams, EtrResponse } from '../shared/custom_types/custom.types';
import * as moment from 'moment';
import { IModuleState } from '../data-store/models/app-state.model';
import { StoreService } from '../data-store/store';


@Injectable({
  providedIn: 'root',
})
export class VehicleApi {
  private defaultDays = GLOBAL_SETTINGS.ETR.defaultDays;
  constructor(
      private http: HttpClient,
      private service: EnvironmentService,
      private viewActions: ViewActions,
      private storeService: StoreService
  ) {
    this.storeService.mapProps('view', 'currentModule')
      .subscribe((data: IModuleState) => {
        this.defaultDays =  (data && data.moduleName && data.moduleName === 'mobile')
        ? GLOBAL_SETTINGS.ETR.defaultDaysMobile
        : GLOBAL_SETTINGS.ETR.defaultDays;
      });
  }

  private getUrlParameter(param) {
    param = param.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + param + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  getAllVehicles(dateRange?: DateRangeETR, pageSize?: any): Observable<EtrResponse> {

    let apiUrl = '';
    const purchase = this.service.configurations.purchase;
    const etrParams = this.getDefaultParams();

    try {
      if (purchase.vehicle) {
        if (this.getUrlParameter('mockEtr') === 'true' ) {
          apiUrl = purchase.dummyEtrVehicle;
        } else {
          apiUrl = purchase.vehicle;
        }
      }
    } catch {
      apiUrl = '';
    }


    if (dateRange) {
      const dateTo = this.convertToIsoDate(dateRange.dateTo, 'end');
      etrParams['DateRange.From'] = this.convertToIsoDate(dateRange.dateFrom, 'start');
      etrParams['DateRange.To'] = dateTo;
    }

    if (pageSize) {
      etrParams.PageSize = pageSize;
    }

    if (purchase && purchase.etrRegion) {
      etrParams.Region = purchase.etrRegion;
    }

    this.viewActions.setVehicleApiDetails(etrParams);

    return this.http.get<any>(apiUrl, {
      params : etrParams
    });
  }

  getDefaultParams(): Partial<IEtrParams> {
    const dateTo = moment().toISOString();
    const dateFrom = this.convertToIsoDate(moment(dateTo).subtract(this.defaultDays, 'd').toISOString(), 'start');

    return {
      'DateRange.From': dateFrom,
      'DateRange.To': dateTo,
       PageNumber: GLOBAL_SETTINGS.ETR.pageNummber,
       PageSize: GLOBAL_SETTINGS.ETR.pageSize,
       Region: GLOBAL_SETTINGS.ETR.Region,
       fakeToken: GLOBAL_SETTINGS.ETR.fakeToken
    };
  }

  convertToIsoDate(date: string, time: string) {
    const formattedDate = moment(date);
    const dateObject = new Date(formattedDate.format('YYYY-MM-DD'));
    const isToday = moment(formattedDate).isSame(moment(), 'day');
    if (time === 'start') {
      dateObject.setUTCHours(0, 0, 0, 0);
      return dateObject.toISOString();
    } else if (time === 'end' && isToday) {
      const ISOTime = (new Date(Date.now())).toISOString();
      return ISOTime;
    } else {
      dateObject.setUTCHours(23, 59, 59, 999);
      return dateObject.toISOString();
    }
  }
}
