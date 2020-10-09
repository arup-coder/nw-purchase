import {Injectable} from '@angular/core';
import {VehicleApi} from '../api/vehicle-api';
import {ActionsConstant} from './action-constants';
import {StoreService} from '../data-store/store';
import {GLOBAL_SETTINGS} from '../shared/global-config';
import {CommonApi} from '../api/common-api';
import {timer} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ErrorHandlerService} from '../shared/services/error-handler.service';
import Utils from '../shared/utils/utils';
import {ApiConstant} from '../shared/enums/enum';
import {MapApiService} from '../api/api-mapper/map-api-service';
import { EtrResponse, DateRangeETR } from '../shared/custom_types/custom.types';


@Injectable({
  providedIn: 'root',
})
export class VehicleActions {
  constructor(
        private vehicleApi: VehicleApi,
        private commonApi: CommonApi,
        private storeService: StoreService,
        private errorHandlerService: ErrorHandlerService,
        private mapApiService: MapApiService,
  ) { }

      loadAllVehicle = (dateRange?: DateRangeETR) => {
        const method = dateRange ? this.vehicleApi.getAllVehicles(dateRange) : this.vehicleApi.getAllVehicles();
        method.subscribe((response: EtrResponse) => {

        this.storeService.updateAppState(
          {
            type: ActionsConstant.GET_RANGE_VEHICLE_COUNT,
            data: response.totalResults,
            currentAppState: ActionsConstant.APP_STATE_VEHICLE,
          });
        this.storeService.updateAppState(
            {
              type: ActionsConstant.GET_ALL_VEHICLE,
              data: this.mapApiService.mapAPI(response).data,
              currentAppState: ActionsConstant.APP_STATE_VEHICLE,
            });
        this.errorHandlerService.removeError();
      }, (error: any) => {
        this.errorHandlerService.handleError(Utils.makeErrorPayload(ApiConstant.GETVEHICLE, error.message));
      });
    }

    getVehicleCount = () => {
      const pageSize = 1;
      const dateRange: DateRangeETR = Utils.getMaxETRDateRange();

      this.vehicleApi.getAllVehicles(dateRange, pageSize).subscribe((response: EtrResponse) => {
        this.storeService.updateAppState(
            {
              type: ActionsConstant.GET_ALL_VEHICLE_COUNT,
              data: response.totalResults,
              currentAppState: ActionsConstant.APP_STATE_VEHICLE,
            });
      }, (error: any) => {
        this.errorHandlerService.handleError(Utils.makeErrorPayload(ApiConstant.VEHICLECOUNT, error.message));
      });
    }

    getNewVehicleCount = () => {
      timer(0, GLOBAL_SETTINGS.updateVehicleTimer).pipe(
          switchMap(() => this.commonApi.getUpdatedVehicleCount()),
      ).subscribe((response: any) => {
        this.storeService.updateAppState(
            {
              type: ActionsConstant.GET_UPDATED_VEHICLE_COUNT,
              data: response.content.count,
              currentAppState: ActionsConstant.APP_STATE_VEHICLE,
            });
      }, (error: any) => {
        this.errorHandlerService.handleError(Utils.makeErrorPayload(ApiConstant.UPDATEDVEHICLECOUNT, error.message));
      });
    }

    resetVehicleCount = (response: number) =>{
      this.storeService.updateAppState(
          {
            type: ActionsConstant.RESET_VEHICLE_COUNT,
            data: response,
            currentAppState: ActionsConstant.APP_STATE_VEHICLE,
          });
    }

    resetSelectedRangeVehicleCount = (response: number) => {
      this.storeService.updateAppState(
          {
            type: ActionsConstant.RESET_RANGE_VEHICLE_COUNT,
            data: response,
            currentAppState: ActionsConstant.APP_STATE_VEHICLE,
          });
    }
}
