import { ViewActions } from './../abstract-actions/view.actions';
import {VehicleApi} from './vehicle-api';
import {TestBed, async, inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {EnvironmentService} from '../shared/services/environment-config';
import {defer} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {GetVehicleApiError} from '../mock/mock-data';
import { StoreService } from '../data-store/store';

export const asyncError = (data) => defer(() => Promise.reject(data));

describe('VehicleApi', () => {
  let vehicleApi: VehicleApi;
  let httpClientSpy;
  let environmentMock;
  let viewActions;
  let storeService: StoreService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnvironmentService, VehicleApi],
      declarations: [],
    }).compileComponents();

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
    environmentMock = jasmine.createSpyObj('Environment', ['getEnvironment']);
    viewActions = TestBed.get(ViewActions);
    storeService = TestBed.get(StoreService);
    vehicleApi = new VehicleApi(httpClientSpy, environmentMock, viewActions, storeService);
  }));

  it('should create an instance', () => {
    const service = TestBed.get(EnvironmentService);
    const httpMock = TestBed.get(HttpClientTestingModule);
    expect(new VehicleApi(httpMock, service, viewActions, storeService)).toBeTruthy();
  });

  // test for getVehicles() function
  it('should be subscribe-able and get value', inject([HttpTestingController, VehicleApi],
      (httpMock: HttpTestingController, service: VehicleApi) => {
        const envService = TestBed.get(EnvironmentService);
        envService.configurations.purchase = {
          vechicle: '',
        };
        service.getAllVehicles().subscribe();
        const mockResponse = httpMock
        .expectOne(req => req.method === 'GET' && req.url === envService.configurations.purchase.vechicle);
      }));


  // test for getVehicles() function
  it('should be subscribe-able and get value', inject([HttpTestingController, VehicleApi],
      (httpMock: HttpTestingController, service: VehicleApi) => {
        const envService = TestBed.get(EnvironmentService);
        const apiUrl = '';
        envService.configurations.purchase = {
          vechicle: undefined,
        };
        service.getAllVehicles().subscribe();
        const mockResponse = httpMock
        .expectOne(req => req.method === 'GET' && req.url === apiUrl);
      }));

  xit('should be able to handle 500 response', (done) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 500 error',
      status: 500,
      statusText: 'Generic server error',
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
    vehicleApi
        .getAllVehicles()
        .subscribe(
            () => {
              fail('Expected to error but event emitted');
              done();
            },
            (err) => {
              expect(JSON.stringify(err)).toEqual(JSON.stringify(GetVehicleApiError.error));
              done();
            });
  });
});


