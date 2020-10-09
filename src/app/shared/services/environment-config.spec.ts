import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EnvironmentService} from '../services/environment-config';
describe('EnvironmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnvironmentService],
    });
  });
  it('should create service', () => {
    const service = TestBed.get(EnvironmentService);
    expect(service).toBeDefined();
  });

  xit('should have correct path : localhost', () => {
    const service = TestBed.get(EnvironmentService);
    expect(service.getURL(window.location)).toEqual('/context.html/assets/environments/localhost.json');
  });

  it('should have correct path : mfe', () => {
    const service = TestBed.get(EnvironmentService);
    const pathname = '/mfe/purchases';
    const hostname = 'openauction.preprod.nw.adesa.com';
    expect(service.getURL({pathname, hostname})).toEqual(
        '/apps/purchases/assets/environments/openauction.preprod.nw.adesa.com.json',
    );
  });

  it('should have correct path : pathname / ', () => {
    const service = TestBed.get(EnvironmentService);
    const pathname = '/';
    const hostname = 'openauction.preprod.nw.adesa.com';
    expect(service.getURL({pathname, hostname})).toEqual(
        '/assets/environments/openauction.preprod.nw.adesa.com.json',
    );
  });

  it('should create loadConfigs', () => {
    const service = TestBed.get(EnvironmentService);
    expect(service.loadConfigs()).toBeDefined();
  });
});
