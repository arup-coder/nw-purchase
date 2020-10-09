import {async, TestBed} from '@angular/core/testing';
import {IModuleState} from '../../models/app-state.model';
import {IAction} from '../../models/action.model';
import {ActionsConstant} from 'src/app/abstract-actions/action-constants';
import {moduleReducer} from '../nested-reducers/module.subreducer';
import {ViewContainerRef} from '@angular/core';

const mockInitialAppState: IModuleState = {
  moduleName: '',
  homeRef: null,
};
const mockAction: IAction = {
  type: null,
  data: null,
  currentAppState: 'view',
};
let viewMockContainerRef;
describe('viewReducer', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [ViewContainerRef],
    });
    viewMockContainerRef = TestBed.get(ViewContainerRef);
  }));

  it('should update module name', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = ActionsConstant.SET_MODULE_NAME;
    mockActionRef.data = 'testModuleName';
    const result = moduleReducer(mockInitialAppState, mockActionRef);
    // need to add assertion
  });
  it('should update module ref', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = ActionsConstant.SET_MODULE_REF;
    mockActionRef.data = viewMockContainerRef;
    const result = moduleReducer(mockInitialAppState, mockActionRef);
    // need to add assertion
  });
  it('should return default state', () => {
    const mockActionRef = JSON.parse(JSON.stringify(mockAction));
    mockActionRef.type = '';
    mockActionRef.data = null;
    const result = moduleReducer(mockInitialAppState, mockActionRef);
    expect(result).toEqual(mockInitialAppState);
  });
});
