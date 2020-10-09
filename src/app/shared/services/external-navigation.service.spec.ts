import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EnvironmentService} from './environment-config';
import {MockEnvData, mockSessionStorageData} from 'src/app/mock/system-mock-data';
import {ExternalNavigationService} from './external-navigation.service';

// Session storage mock
const store = mockSessionStorageData;
const mockLocalStorage = {
  getItem: (key: string): string => {
    return key in store ? JSON.stringify(store[key]) : null;
  },
};

// Testing for classic link on the basis of environment props
describe('ExternalNavigationService', () => {
  let extService: ExternalNavigationService;
  let configService: EnvironmentService;
  beforeEach(() => {
    // TestBed testing module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnvironmentService],
      declarations: [],
    }).compileComponents();
    // Inject service
    configService = TestBed.get(EnvironmentService);
    // Assiging needed mockData
    configService.configurations = MockEnvData;
    // Spying for session storagw
    spyOn(sessionStorage, 'getItem')
        .and.callFake(mockLocalStorage.getItem);
    // Instance of current class
    extService = new ExternalNavigationService(configService);
  });

  it('should be created', () => {
    expect(extService).toBeTruthy();
  });

  it('should return classic vdp link', () => {
    // Arrange
    const originVid = '571378413';
    const nwVehicleId = '4C4C2C7B-5B37-5539-B1BD-BEBDF597C644';
    const expectResult = 'https://buy.test1.adesa.com/openauction/detail.html?vehicleId=571378413&from=nwPurchases';
    // TODO: write test case for this scenario
    // Act
    const result = extService.getVdpLink(originVid, nwVehicleId);
    // Assert
    expect(result).toEqual(expectResult);
  });

  it('should return null in classic vdp link', () => {
    // Arrange
    extService.buyerOaUrl = null;
    const originVid = '571378413';
    const nwVehicleId = '4C4C2C7B-5B37-5539-B1BD-BEBDF597C644';
    const expectResult = 'https://buy.test1.adesa.com/openauction/detail.html?vehicleId=571378413&from=nwPurchases';
    // TODO: write test case for this scenario
    // Act
    const result = extService.getVdpLink(originVid, nwVehicleId);
    // Assert
    expect(result).toEqual(undefined);
  });
});

