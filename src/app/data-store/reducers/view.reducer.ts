import { IVehicle } from './../models/vehicle.model';
import { filterColumns } from './../../shared/enums/enum';
import { FILTER_SETTINGS } from './../../shared/global-config';
import {IViewState} from '../models/app-state.model';
import {IAction} from '../models/action.model';
import {ActionsConstant} from 'src/app/abstract-actions/action-constants';
import {Immutable} from '../immutable';
import {filterReducer} from './nested-reducers/filter.subreducer';
import {moduleReducer} from './nested-reducers/module.subreducer';
import Utils from 'src/app/shared/utils/utils';

const setFilters = (data: IVehicle[], initialState: IViewState) => {
  const filterConfig = JSON.parse(JSON.stringify([...FILTER_SETTINGS]));
  const state = initialState;
  filterConfig.forEach(filter => {
    data.forEach(row => {
      const value = Utils.getData(row, filter.name);
      if (value && filter.type === 'checkbox') {
        filter.options.forEach(option => {
          /* istanbul ignore else */
        
          if (option.value === value) {
            const allIndex = filter.options.findIndex((instance) => instance.title === 'All' && !filter.canFilterWithOR);
            if (allIndex != -1) {
              filter.options[allIndex].count = filter.options[allIndex].count + 1;
            }
            option.count = option.count + 1;
          }
          if (option.valueArray != undefined && option.valueArray.includes(value)) {
            const allIndex = filter.options.findIndex((instance) => instance.title === 'All' && !filter.canFilterWithOR);
            if (allIndex != -1) {
              filter.options[allIndex].count = filter.options[allIndex].count + 1;
            }
            option.count = option.count + 1;
          }
        });
      }
      if (value && filter.type === 'date') {
        const minDate = state.vehicleApiDetails['DateRange.From'] ? Utils.formatTheDate(state.vehicleApiDetails['DateRange.From']) : '';
        const maxDate = state.vehicleApiDetails['DateRange.From'] ? Utils.formatTheDate(state.vehicleApiDetails['DateRange.To']) : '';

        filter.options.forEach(option => {
          option.count = Utils.getSaleDateCount(row, option.title, option.count, filterColumns.saleDate, minDate, maxDate);
        });
      }
    });
  });
  return filterConfig;
};

export function viewReducer(initialState: IViewState, action: IAction): IViewState {
  let updatedState: IViewState;

  switch (action.type) {
    case ActionsConstant.SET_CURRENT_MODULE:
      {
        updatedState = Immutable.setIn(
            initialState,
            'currentModule',
            moduleReducer(initialState.currentModule, action),
        );
      }
      break;
    case ActionsConstant.SET_ALERT_CONFIG:
      {
        updatedState = Immutable.setIn(initialState, 'alertConfig', action.data);
      }
      break;
    case ActionsConstant.SET_API_LOADER:
      {
        updatedState = Immutable.setIn(initialState, 'showLoader', action.data);
      }
      break;
    case ActionsConstant.SET_CARD_DETAILS_VIEW:
      {
        updatedState = Immutable.setIn(initialState, 'showCardDetailsView', action.data);
      }
      break;
    case ActionsConstant.SET_FILTERS_CONFIG:
      {
        const filteredData = setFilters(action.data, initialState);
        updatedState = Immutable.setIn(initialState, 'filtersConfig', filteredData);
      }
      break;
    case ActionsConstant.SET_FILTER:
      {
        updatedState = Immutable.setIn(initialState, 'filter', filterReducer(initialState.filter, action));
      }
      break;
    case ActionsConstant.SET_FILTER_QUERY_STRING:
      {
        updatedState = Immutable.setIn(initialState, 'filterQueryString', action.data);
      }
      break;
    case ActionsConstant.SET_EXCEPTION:
      {
        updatedState = Immutable.setIn(initialState, 'exception', action.data);
      }
      break;
    case ActionsConstant.SET_EXPAND_ALL_FOR_ROWS:
      {
        updatedState = Immutable.setIn(initialState, 'expandAllForRows', action.data);
      }
      break;
    case ActionsConstant.SET_COLLAPSE_ON_PAGE_FILTER:
      {
        updatedState = Immutable.setIn(initialState, 'collapseOnPageFilter', action.data);
      }
      break;
    case ActionsConstant.SET_EXPAND_FOR_SINGLE_ROW:
      {
        updatedState = Immutable.setIn(initialState, 'expandForSingleRow', action.data);
      }
      break;
    case ActionsConstant.SET_VEHICLE_API_DETAILS:
      {
        updatedState = Immutable.setIn(initialState, 'vehicleApiDetails', action.data);
      }
      break;
    case ActionsConstant.SET_EXPORT_TYPE:
      {
        updatedState = Immutable.setIn(initialState, 'exportType', action.data);
      }
      break;
    default:
      updatedState = initialState;
  }

  return updatedState;
}
