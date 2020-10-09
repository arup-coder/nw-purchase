import {async, TestBed} from '@angular/core/testing';
import {viewReducer} from '../view.reducer';
import {IViewState, IModuleState} from '../../models/app-state.model';
import {IAlertConfig} from '../../models/alert.model';
import {IFilterState} from '../../models/filter.model';
import {IErrorEvent} from '../../models/error-event.model';
import {IAction} from '../../models/action.model';
import {ActionsConstant} from 'src/app/abstract-actions/action-constants';
import {IFilterConfig} from 'src/app/shared/custom_types/custom.types';

const mockInitialAppState: IViewState = {
  showLoader: false,
  alertConfig: {} as IAlertConfig,
  filter: {vin: ''} as IFilterState,
  filterQueryString: '',
  filtersConfig: [] as IFilterConfig[],
  currentModule: {moduleName: ''} as IModuleState,
  showCardDetailsView: false,
  exception: {
    errorPayload: {component: '', errorSource: '', errorDescription: ''},
    errorState: false,
  } as IErrorEvent,
  expandAllForRows: false,
  collapseOnPageFilter: null,
  expandForSingleRow: null,
  exportType: null,
  vehicleApiDetails: {
    'DateRange.From': '08/12/20',
    'DateRange.To': '08/12/20',
    PageNumber: '1',
    PageSize: '25',
    Region: '',
    fakeToken: ''
  }
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

  it('should update showCardDetailsView', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = ActionsConstant.SET_CARD_DETAILS_VIEW;
    mockActionRef.data = true;
    const result = viewReducer(mockInitialAppState, mockActionRef);
    expect(result.showCardDetailsView).toEqual(mockActionRef.data);
  });
  it('should update showLoader', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = ActionsConstant.SET_API_LOADER;
    mockActionRef.data = true;
    const result = viewReducer(mockInitialAppState, mockActionRef);
    expect(result.showLoader).toEqual(mockActionRef.data);
  });
  it('should update filter', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = ActionsConstant.SET_FILTER;
    mockActionRef.subtype = 'vin';
    mockActionRef.data = '1234567890';
    const result = viewReducer(mockInitialAppState, mockActionRef);
    expect(result.filter.vin).toEqual(mockActionRef.data);
  });
  it('should update filterQueryString', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = ActionsConstant.SET_FILTER_QUERY_STRING;
    mockActionRef.data = 'vin=1234567890';
    const result = viewReducer(mockInitialAppState, mockActionRef);
    expect(result.filterQueryString).toEqual(mockActionRef.data);
  });
  it('should update exception', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = ActionsConstant.SET_EXCEPTION;
    mockActionRef.data = {
      errorPayload: {component: '', errorSource: '', errorDescription: ''},
      errorState: true,
    };
    const result = viewReducer(mockInitialAppState, mockActionRef);
    expect(result.exception.errorState).toEqual(mockActionRef.data.errorState);
  });
  it('should update filtersConfig', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = ActionsConstant.SET_FILTERS_CONFIG;
    mockActionRef.data = [{
      type: 'checkbox',
      heading: 'Title Status',
      name: 'titleStatus.status',
      id: 'titleStatus',
    }];
    const result = viewReducer(mockInitialAppState, mockActionRef);
    expect(mockActionRef.data.length).toEqual(1);
  });
  it('should update expandAllForRows', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = ActionsConstant.SET_EXPAND_ALL_FOR_ROWS;
    mockActionRef.data = true;
    const result = viewReducer(mockInitialAppState, mockActionRef);
    expect(result.expandAllForRows).toEqual(mockActionRef.data);
  });
  it('should update expandSingleForRows', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = ActionsConstant.SET_EXPAND_FOR_SINGLE_ROW;
    mockActionRef.data = true;
    const result = viewReducer(mockInitialAppState, mockActionRef);
    expect(result.expandForSingleRow).toEqual(mockActionRef.data);
  });
  it('should update collapse on page filter', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = ActionsConstant.SET_COLLAPSE_ON_PAGE_FILTER;
    mockActionRef.data = true;
    const result = viewReducer(mockInitialAppState, mockActionRef);
    expect(result.collapseOnPageFilter).toEqual(mockActionRef.data);
  });
  it('should update exportType', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = ActionsConstant.SET_EXPORT_TYPE;
    mockActionRef.data = 'grid';
    const result = viewReducer(mockInitialAppState, mockActionRef);
    expect(result.exportType).toEqual(mockActionRef.data);
  });
  it('should return default state', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = '';
    mockActionRef.data = null;
    const result = viewReducer(mockInitialAppState, mockActionRef);
    expect(result).toEqual(mockInitialAppState);
  });
});
