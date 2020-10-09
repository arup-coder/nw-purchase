import {async, TestBed} from '@angular/core/testing';
import {StoreService} from './store';

describe('StoreService', () => {
  let service: StoreService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [],
    });
  }));

  beforeEach(() => {
    service = TestBed.get(StoreService);
  });

  it('should create service', () => {
    expect(service).toBeDefined();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
