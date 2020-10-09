import { IEtrParams, ExportType } from './../shared/custom_types/custom.types';
import {IVehicle} from './../data-store/models/vehicle.model';
import {Injectable, ViewContainerRef} from '@angular/core';
import {ActionsConstant} from './action-constants';
import {StoreService} from '../data-store/store';
import {IAlertConfig} from '../data-store/models/alert.model';
import {IFilterState, IFilterStateKeys} from '../data-store/models/filter.model';
import Utils from '../shared/utils/utils';
import {IErrorEvent} from '../data-store/models/error-event.model';

@Injectable({
  providedIn: 'root',
})
export class ViewActions {
  private vehicleDetails: Partial<IEtrParams> = {};

  constructor(
    private readonly storeService: StoreService,
  ) { }

  showLoader = (value: boolean) => {
    this.storeService.updateAppState(
        {
          type: ActionsConstant.SET_API_LOADER,
          data: value,
          currentAppState: ActionsConstant.APP_STATE_VIEW,
        });
  }

  setCurrentModuleName = (data: string) => {
    this.storeService.updateAppState({
      type: ActionsConstant.SET_CURRENT_MODULE,
      subType: ActionsConstant.SET_MODULE_NAME,
      data,
      currentAppState: ActionsConstant.APP_STATE_VIEW,
    });
  }

  setCurrentModuleRef = (data: ViewContainerRef) => {
    this.storeService.updateAppState({
      type: ActionsConstant.SET_CURRENT_MODULE,
      subType: ActionsConstant.SET_MODULE_REF,
      data,
      currentAppState: ActionsConstant.APP_STATE_VIEW,
    });
  }

  setAlertConfig = (data: IAlertConfig) => {
    this.storeService.updateAppState({
      type: ActionsConstant.SET_ALERT_CONFIG,
      data,
      currentAppState: ActionsConstant.APP_STATE_VIEW,
    });
  }

  showCardDetailsView = (value: boolean) => {
    this.storeService.updateAppState(
        {
          type: ActionsConstant.SET_CARD_DETAILS_VIEW,
          data: value,
          currentAppState: ActionsConstant.APP_STATE_VIEW,
        });
  }
  setFiltersConfig = (data: IVehicle[]) => {
    this.storeService.updateAppState({
      type: ActionsConstant.SET_FILTERS_CONFIG,
      data,
      currentAppState: ActionsConstant.APP_STATE_VIEW,
    });
  }

  setFilterState = (data: IFilterState) => {
    // loop through all filter keys and update store separately
    Object.keys(data).map((filter: IFilterStateKeys) => {
      // Prepare action constant dynamically
      const actionConstantKey = `SET_FILTER`;
      // Update as per action constant
      this.storeService.updateAppState({
        type: ActionsConstant[actionConstantKey],
        subtype: filter,
        data: data[filter],
        currentAppState: ActionsConstant.APP_STATE_VIEW,
      });
    });
    this.setFilterQueryString();
  }

  setFilterQueryString = () => {
    // fetch current state;
    const filterState: IFilterState = this.storeService.appState.view.filter;
    // Set filter state in local storage
    Utils.setItemLocalStorage('filter', filterState);
    // Prepare url encode string
    const filterQueryString = Object.keys(filterState).map((currentFilterKey) => {
      return `${currentFilterKey}=${filterState[currentFilterKey]}`;
    }).join('&');
    // Update the store for key = 'filterQueryString'
    this.storeService.updateAppState({
      type: ActionsConstant.SET_FILTER_QUERY_STRING,
      data: filterQueryString,
      currentAppState: ActionsConstant.APP_STATE_VIEW,
    });
  }
  setException = (data: IErrorEvent) => {
    this.storeService.updateAppState({
          type: ActionsConstant.SET_EXCEPTION,
          data,
          currentAppState: ActionsConstant.APP_STATE_VIEW,
    });
  }
  setExpandAllForRows = (data: boolean) => {
    this.storeService.updateAppState({
          type: ActionsConstant.SET_EXPAND_ALL_FOR_ROWS,
          data,
          currentAppState: ActionsConstant.APP_STATE_VIEW,
    });
  }

  setCollapseOnPageFilter = (data: boolean) => {
    this.storeService.updateAppState({
          type: ActionsConstant.SET_COLLAPSE_ON_PAGE_FILTER,
          data,
          currentAppState: ActionsConstant.APP_STATE_VIEW,
    });
  }
  setExpandForSingleRow = (data: boolean) => {
    this.storeService.updateAppState({
          type: ActionsConstant.SET_EXPAND_FOR_SINGLE_ROW,
          data,
          currentAppState: ActionsConstant.APP_STATE_VIEW,
    });
  }

  setVehicleApiDetails(data: Partial<IEtrParams>) {
    this.storeService.updateAppState(
      {
        type: ActionsConstant.SET_VEHICLE_API_DETAILS,
        data,
        currentAppState: ActionsConstant.APP_STATE_VIEW,
      });
  }

  setExportType = (data: ExportType) => {
    this.storeService.updateAppState(
      {
        type: ActionsConstant.SET_EXPORT_TYPE,
        data,
        currentAppState: ActionsConstant.APP_STATE_VIEW,
      });
  }
}
