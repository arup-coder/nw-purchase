import {CommonApi} from './common-api';
import {TestBed, async, inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {EnvironmentService} from '../shared/services/environment-config';
import {defer} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import Utils from '../shared/utils/utils';
import {GETUpdatedVehiclesCount} from '../mock/mock-data';

export const asyncError = (data) => defer(() => Promise.reject(data));

describe('Common Api', () => {
  let commonApi: CommonApi;
  let httpClientSpy;
  let environmentMock;

  const mockUtilsService = {
    makeErrorPayload: (errorSource: string, message: string) => {
      const errDescrption = {
        component: '',
        errorSource: errorSource,
        errorDescription: message,
      };

      const error = {
        errorPayload: errDescrption,
        errorState: true,
      };
      return error;
    },
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnvironmentService, CommonApi],
      declarations: [],
    }).compileComponents();

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
    environmentMock = jasmine.createSpyObj('Environment', ['getEnvironment']);
    commonApi = new CommonApi(httpClientSpy, environmentMock);
  }));

  it('should create an instance', () => {
    const service = TestBed.get(EnvironmentService);
    const httpMock = TestBed.get(HttpClientTestingModule);
    expect(new CommonApi(httpMock, service)).toBeTruthy();
  });

  // test for getVehicles() function
  it('should be subscribe-able and get value', inject([HttpTestingController, CommonApi],
      (httpMock: HttpTestingController, service: CommonApi) => {
        const envService = TestBed.get(EnvironmentService);
        envService.configurations.purchase = {
          vehicleCount: '',
          updatedVehiclesCount: '',
        };

        service.getVehiclesCount().subscribe();
        let req = httpMock.expectOne(envService.configurations.purchase.vehicleCount);
        expect(req.request.method).toEqual('GET');

        service.getUpdatedVehicleCount().subscribe();
        req = httpMock.expectOne(envService.configurations.purchase.updatedVehiclesCount);
        expect(req.request.method).toEqual('GET');
      }));


  // test for getVehicles() function
  it('should be subscribe-able and get value', inject([HttpTestingController, CommonApi],
      (httpMock: HttpTestingController, service: CommonApi) => {
        const envService = TestBed.get(EnvironmentService);
        const apiUrl = '';
        envService.configurations.purchase = {
          vehicleCount: undefined,
          updatedVehiclesCount: undefined,
        };
        service.getVehiclesCount().subscribe();
        let req = httpMock.expectOne(apiUrl);
        expect(req.request.method).toEqual('GET');

        service.getUpdatedVehicleCount().subscribe();
        req = httpMock.expectOne(apiUrl);
        expect(req.request.method).toEqual('GET');
      }));

  xit('should be able to handle 500 response', (done) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 500 error',
      status: 500,
      statusText: 'Generic server error',
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
    commonApi
        .getVehiclesCount()
        .subscribe(
            () => {
              fail('Expected to error but event emitted');
              done();
            },
            (err) => {
              expect(JSON.stringify(err)).toEqual(JSON.stringify(GETUpdatedVehiclesCount.error));
              done();
            });
  });
});
