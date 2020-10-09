import {IVehicleState} from '../models/app-state.model';
import {IAction} from '../models/action.model';
import {ActionsConstant} from 'src/app/abstract-actions/action-constants';
import {Immutable} from '../immutable';

export function vehiclceReducer(initialState: IVehicleState, action: IAction) {
  let updatedState: IVehicleState;
  switch (action.type) {
    case ActionsConstant.GET_ALL_VEHICLE:
      {
        updatedState = Immutable.setIn(initialState, 'vehicles', action.data);
      }
      break;
    case ActionsConstant.GET_RANGE_VEHICLE_COUNT:
      {
        updatedState = Immutable.setIn(initialState, 'selectedRangeVehicleCount', action.data); 
      }
      break;
    case ActionsConstant.GET_ALL_VEHICLE_COUNT:
      {
        updatedState = Immutable.setIn(initialState, 'allRangevehicleCount', action.data);
      }
      break;  
    case ActionsConstant.GET_UPDATED_VEHICLE_COUNT:
      {
        updatedState = Immutable.setIn(initialState, 'recentPurchasedVehicleCount', action.data);
      }
      break;
    case ActionsConstant.RESET_VEHICLE_COUNT:
      {
        updatedState = Immutable.setIn(initialState, 'recentPurchasedVehicleCount', action.data);
      }
      break;
    case ActionsConstant.RESET_RANGE_VEHICLE_COUNT:
      {
        updatedState = Immutable.setIn(initialState, 'selectedRangeVehicleCount', action.data);
      }
      break;  
    default:
      updatedState = initialState;
  }

  return updatedState;
}
