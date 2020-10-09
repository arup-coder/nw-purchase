import { IEtrParams, ExportType } from './../../shared/custom_types/custom.types';
import {IVehicle} from '../models/vehicle.model';
import {IAlertConfig, AlertConfig} from './alert.model';
import {IFilterState, FilterState} from './filter.model';
import {ViewContainerRef} from '@angular/core';
import {IErrorEvent, ErrorEvent} from 'src/app/data-store/models/error-event.model';

export interface IAppState {
  vehicle: IVehicleState;
  view: IViewState;
}

export class InitialAppState implements IAppState {
  vehicle: IVehicleState;
  view: IViewState;

  constructor(
      vehicle: IVehicleState = new InitialVehicleState(),
      view: IViewState = new InitialViewState(),
  ) {
    this.vehicle = vehicle;
    this.view = view;
  }
}

export interface IVehicleState {
  vehicles: IVehicle[];
  allRangevehicleCount: number;
  selectedRangeVehicleCount: number;
  recentPurchasedVehicleCount: number;
}

export class InitialVehicleState implements IVehicleState {
  vehicles: IVehicle[];
  allRangevehicleCount: number;
  selectedRangeVehicleCount: number;
  recentPurchasedVehicleCount: number;

  constructor(
      vList: IVehicle[] = [],
      allVehicleCount = 0,
      rangeVehicleCount =0,
      recentPurchasedVehicleCount = 0,
  ) {
    this.vehicles = vList;
    this.allRangevehicleCount = allVehicleCount;
    this.selectedRangeVehicleCount = rangeVehicleCount;
    this.recentPurchasedVehicleCount = recentPurchasedVehicleCount;
  }
}

export interface IViewState {
  showLoader: boolean;
  alertConfig: IAlertConfig;
  filtersConfig: any[];
  filter: IFilterState;
  filterQueryString: string;
  currentModule: IModuleState;
  showCardDetailsView: boolean;
  exception: IErrorEvent;
  expandAllForRows: boolean;
  collapseOnPageFilter: boolean;
  vehicleApiDetails: IEtrParams;
  expandForSingleRow: boolean;
  exportType: ExportType;
}

class InitialViewState implements IViewState {
  showLoader: boolean;
  alertConfig: IAlertConfig;
  filtersConfig: any[];
  filter: IFilterState;
  filterQueryString: string;
  currentModule: IModuleState;
  showCardDetailsView: boolean;
  exception: IErrorEvent;
  expandAllForRows: boolean;
  collapseOnPageFilter: boolean;
  vehicleApiDetails: IEtrParams;
  expandForSingleRow: boolean;
  exportType: ExportType;
  constructor(
      showLoader = false,
      alertConfig: IAlertConfig = new AlertConfig(),
      filter: IFilterState = new FilterState(),
      filterQueryString = '',
      filtersConfig: any[] = [],
      currentModule = new InitialModuleState(),
      exceptionMsg: IErrorEvent = new ErrorEvent(),
      expandAllForRows = false,
      collapseOnPageFilter = null,
      vehicleApiDetails: IEtrParams = new ErtParamState(),
      expandForSingleRow = null,
      exportType = null,
  ) {
    this.showLoader = showLoader;
    this.alertConfig = alertConfig;
    this.filter = filter;
    this.filterQueryString = filterQueryString;
    this.filtersConfig = filtersConfig;
    this.currentModule = currentModule;
    this.exception = exceptionMsg;
    this.expandAllForRows = expandAllForRows;
    this.collapseOnPageFilter = collapseOnPageFilter;
    this.vehicleApiDetails = vehicleApiDetails;
    this.expandForSingleRow = expandForSingleRow;
    this.exportType = exportType;
  }
}

export interface IModuleState {
  moduleName: string;
  homeRef: ViewContainerRef;
}

class InitialModuleState implements IModuleState {
  moduleName: string;
  homeRef: ViewContainerRef;

  constructor(
      moduleName = '',
      homeRef: ViewContainerRef = null,
  ) {
    this.moduleName = moduleName;
    this.homeRef = homeRef;
  }
}

class ErtParamState implements IEtrParams {
  'DateRange.From': string;
  'DateRange.To': string;
  PageNumber: string;
  PageSize: string;
  Region: string;
  fakeToken: string;

  constructor(
    PageNumber = '',
    PageSize = '',
    Region = '',
    fakeToken = '',
  ) {
    this['DateRange.From'] = '';
    this['DateRange.To'] = '';
    this.PageNumber = PageNumber;
    this.Region = Region;
    this.PageSize = PageSize;
    this.fakeToken = fakeToken;
  }
}
