import {async, TestBed} from '@angular/core/testing';
import {IVehicleState} from '../../models/app-state.model';
import {IAction} from '../../models/action.model';
import {ActionsConstant} from 'src/app/abstract-actions/action-constants';
import {IVehicle} from '../../models/vehicle.model';
import {vehiclceReducer} from '../vehicle.reducer';

const mockInitialAppState: IVehicleState = {
  vehicles: [] as IVehicle[],
  allRangevehicleCount: 0,
  selectedRangeVehicleCount: 0,
  recentPurchasedVehicleCount: 0,

};
const mockAction: IAction = {
  type: null,
  data: null,
  currentAppState: 'view',
};
describe('viewReducer', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [],
    });
  }));

  it('should update vehicles', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = ActionsConstant.GET_ALL_VEHICLE;
    mockActionRef.data = [{
      nwVehicleId: 'wfqfw-ewfwef-ewfewfew-ewfewf',
    }];
    const result = vehiclceReducer(mockInitialAppState, mockActionRef);
    expect(result.vehicles.length).toEqual(mockActionRef.data.length);
  });
  it('should update recentPurchasedVehicleCount', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = ActionsConstant.GET_UPDATED_VEHICLE_COUNT;
    mockActionRef.data = 1;
    const result = vehiclceReducer(mockInitialAppState, mockActionRef);
    expect(result.recentPurchasedVehicleCount).toEqual(mockActionRef.data);
  });
  it('should reset recentPurchasedVehicleCount', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = ActionsConstant.RESET_VEHICLE_COUNT;
    mockActionRef.data = 0;
    const result = vehiclceReducer(mockInitialAppState, mockActionRef);
    expect(result.recentPurchasedVehicleCount).toEqual(mockActionRef.data);
  });
  it('should update Selected Range Vehicle Count', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = ActionsConstant.GET_RANGE_VEHICLE_COUNT;
    mockActionRef.data = 0;
    const result = vehiclceReducer(mockInitialAppState, mockActionRef);
    expect(result.selectedRangeVehicleCount).toEqual(mockActionRef.data);
  });
  it('should update All Range Vehicle Count', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = ActionsConstant.GET_ALL_VEHICLE_COUNT;
    mockActionRef.data = -1;
    const result = vehiclceReducer(mockInitialAppState, mockActionRef);
    expect(result.allRangevehicleCount).toEqual(mockActionRef.data);
  });

  it('should return default state', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = '';
    mockActionRef.data = null;
    const result = vehiclceReducer(mockInitialAppState, mockActionRef);
    expect(result).toEqual(mockInitialAppState);
  });
});
