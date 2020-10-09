import {ViewActions} from './view.actions';
import {async, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreService} from '../data-store/store';
import {ViewContainerRef} from '@angular/core';
import {IAlertConfig} from '../data-store/models/alert.model';
import {IFilterState} from '../data-store/models/filter.model';
import {IErrorEvent} from '../data-store/models/error-event.model';
import {IVehicle} from '../data-store/models/vehicle.model';
import {IViewState} from '../data-store/models/app-state.model';
import {VehiclesMockData} from '../mock/mock-data';

describe('View Actions', () => {
  let viewActions: ViewActions;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ViewActions,
        StoreService,
      ],
      declarations: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    const storeService = TestBed.get(StoreService);
    viewActions = new ViewActions(storeService);
  });

  it('should create an View Actions instance', () => {
    const storeService = TestBed.get(StoreService);
    expect(new ViewActions(storeService)).toBeTruthy();
  });

  it('should call showLoader', () => {
    const storeInstance = TestBed.get(StoreService);
    spyOn(storeInstance, 'updateAppState');
    const dummyFlag = true;
    viewActions.showLoader(dummyFlag);
    expect(storeInstance.updateAppState).toHaveBeenCalled();
  });

  it('should call setCurrentModuleName', () => {
    const storeInstance = TestBed.get(StoreService);
    spyOn(storeInstance, 'updateAppState');
    const dummyModuleName = 'mobile';
    viewActions.setCurrentModuleName(dummyModuleName);
    expect(storeInstance.updateAppState).toHaveBeenCalled();
  });

  it('should call setCurrentModuleRef', () => {
    const storeInstance = TestBed.get(StoreService);
    spyOn(storeInstance, 'updateAppState');
    let dummyModuleRef: ViewContainerRef;
    viewActions.setCurrentModuleRef(dummyModuleRef);
    expect(storeInstance.updateAppState).toHaveBeenCalled();
  });

  it('should call setAlertConfig', () => {
    const storeInstance = TestBed.get(StoreService);
    spyOn(storeInstance, 'updateAppState');
    let data: IAlertConfig;
    viewActions.setAlertConfig(data);
    expect(storeInstance.updateAppState).toHaveBeenCalled();
  });

  it('should call showCardDetailsView ', () => {
    const storeInstance = TestBed.get(StoreService);
    spyOn(storeInstance, 'updateAppState');
    const dummyFlag = true;
    viewActions.showCardDetailsView(dummyFlag);
    expect(storeInstance.updateAppState).toHaveBeenCalled();
  });

  it('should call setFilterQueryString', () => {
    const storeInstance = TestBed.get(StoreService);
    spyOn(storeInstance, 'updateAppState');
    viewActions.setFilterQueryString();
    expect(storeInstance.updateAppState).toHaveBeenCalled();
  });

  it('should call setFilterState', () => {
    const storeInstance = TestBed.get(StoreService);
    spyOn(storeInstance, 'updateAppState');
    const filter: IFilterState = {vin: ''} as IFilterState;
    viewActions.setFilterState(filter);
    expect(storeInstance.updateAppState).toHaveBeenCalled();
  });

  it('should call setException', () => {
    const storeInstance = TestBed.get(StoreService);
    spyOn(storeInstance, 'updateAppState');
    const exception: IErrorEvent = {
      errorPayload: {component: '', errorSource: '', errorDescription: ''},
      errorState: false,
    } as IErrorEvent;
    viewActions.setException(exception);
    expect(storeInstance.updateAppState).toHaveBeenCalled();
  });

  it('should call setFiltersConfig', () => {
    const storeInstance = TestBed.get(StoreService);
    spyOn(storeInstance, 'updateAppState');
    const data: IVehicle[] =VehiclesMockData;
    viewActions.setFiltersConfig(data);
    expect(storeInstance.updateAppState).toHaveBeenCalled();
  });
});
