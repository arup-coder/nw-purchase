import {VehiclesMockData} from './../../mock/mock-data';
import {InitialVehicleState} from './app-state.model';
import {async, TestBed} from '@angular/core/testing';

describe('App State Model', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [],
    });
  }));

  beforeEach(() => {

  });

  it('should create app state model', () => {
    let instance = new InitialVehicleState();
    expect(JSON.stringify(instance.vehicles)).toEqual(JSON.stringify([]));
    expect(instance.allRangevehicleCount).toEqual(0);
    expect(instance.selectedRangeVehicleCount).toEqual(0); 
    expect(instance.recentPurchasedVehicleCount).toEqual(0);

    const vehicles = VehiclesMockData;
    instance = new InitialVehicleState(vehicles, 1, 1,1);
    expect(JSON.stringify(instance.vehicles))
    .toEqual(JSON.stringify(vehicles));
    expect(instance.allRangevehicleCount).toEqual(1);
    expect(instance.selectedRangeVehicleCount).toEqual(1); 
    expect(instance.recentPurchasedVehicleCount).toEqual(1);
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
