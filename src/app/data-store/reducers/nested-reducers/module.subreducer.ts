import {IModuleState} from '../../models/app-state.model';
import {ActionsConstant} from 'src/app/abstract-actions/action-constants';
import {IAction} from '../../models/action.model';
import {Immutable} from '../../immutable';

export function moduleReducer(initialState: IModuleState, action: IAction): IModuleState {
  let updatedState: IModuleState;
  switch (action.subType) {
    case ActionsConstant.SET_MODULE_NAME:
      {
        updatedState = Immutable.setIn(initialState, 'moduleName', action.data);
      }
      break;
    case ActionsConstant.SET_MODULE_REF:
      {
        updatedState = Immutable.setIn(initialState, 'homeRef', action.data);
      }
      break;
    default:
      updatedState = initialState;
  }

  return updatedState;
}
