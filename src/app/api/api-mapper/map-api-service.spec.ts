import {MapApiService} from './map-api-service';
import {TestBed, async} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {defer} from 'rxjs';
import {ErrorHandlerService} from 'src/app/shared/services/error-handler.service';
import {VehiclesMockData} from 'src/app/mock/mock-data';

export const asyncError = (data) => defer(() => Promise.reject(data));

describe('MapApiService', () => {
  let mapApiService: MapApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MapApiService,
        ErrorHandlerService],
      declarations: [],
    }).compileComponents();
    mapApiService = TestBed.get(MapApiService);
  }));

  it('should setConfig', () => {
    const mockApiData = {
      data: VehiclesMockData,
    };
    // Arbitration object in IVehicleCTO is not updated
    // To be replaced with etrMock
    spyOn(mapApiService, 'setConfig');
    mapApiService.mapAPI(mockApiData);
    expect(mapApiService.setConfig).toHaveBeenCalled();
  });
});
