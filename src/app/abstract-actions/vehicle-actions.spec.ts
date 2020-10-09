import {MapApiService} from './../api/api-mapper/map-api-service';
import {async, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {VehicleApi} from '../api/vehicle-api';
import {StoreService} from '../data-store/store';
import {VehicleActions} from './vehicle-actions';
import {CommonApi} from '../api/common-api';
import {ErrorHandlerService} from '../shared/services/error-handler.service';

describe('VehicleActions', () => {
  let vehicleActions: VehicleActions;
  let vehicleApi: VehicleApi;
  let commonApi: CommonApi;
  let storeService: StoreService;
  let errorHandlerService: ErrorHandlerService;
  let mapApiService: MapApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        VehicleApi,
        CommonApi,
        StoreService,
        ErrorHandlerService,
      ],
      declarations: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    vehicleApi = TestBed.get(VehicleApi);
    commonApi = TestBed.get(CommonApi);
    storeService = TestBed.get(StoreService);
    errorHandlerService = TestBed.get(ErrorHandlerService);
    mapApiService = TestBed.get(MapApiService);
  });
});
