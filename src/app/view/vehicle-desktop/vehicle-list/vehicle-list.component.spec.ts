import { CommonApi } from './../../../api/common-api';
import { VehicleActions } from './../../../abstract-actions/vehicle-actions';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {VehiclesMockData} from '../../../mock/mock-data';
import {VehicleConfigService} from './vehicle-config';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { VehicleListComponent } from './vehicle-list.component';
import {CheckboxModule} from '@nw/nw-component-library';
import {NO_ERRORS_SCHEMA, SimpleChanges, SimpleChange} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ViewActions} from 'src/app/abstract-actions/view.actions';
import {StoreService} from 'src/app/data-store/store';
import { SalesChannel, AssuranceStatus } from 'src/app/shared/enums/enum';
import { PaginationChangedEvent, RowNode, GridOptions, GridApi } from '@ag-grid-enterprise/all-modules';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CheckboxModule,
        BrowserAnimationsModule,
      ],
      providers: [DatePipe, VehicleConfigService, HttpClient, HttpHandler, ViewActions, StoreService, VehicleActions, CommonApi],
      declarations: [
        VehicleListComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    component.ngOnInit();

    fixture.detectChanges();
  });


  afterEach(() => {
    fixture.destroy();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check for vehicleList length', () => {
    const mockVehicleList = VehiclesMockData;
    const mockChange = {
      vehicleList: {
        previousValue: undefined,
        currentValue: mockVehicleList,
        firstChange: true,
      },
    };

    let changes: SimpleChanges = {
      vehicleList: new SimpleChange(mockChange.vehicleList.previousValue, mockChange.vehicleList.currentValue,
          mockChange.vehicleList.firstChange),
    };

    component.ngOnChanges(changes);
    expect(component.vehicleList.length).toBe(mockVehicleList.length);

    changes = {
      vehicleList: new SimpleChange(mockChange.vehicleList.previousValue, undefined,
          mockChange.vehicleList.firstChange),
    };

    component.ngOnChanges(changes);
    expect(component.vehicleList.length).toBe(mockVehicleList.length);

    changes = {
      vehicleList: new SimpleChange(mockChange.vehicleList.previousValue, [],
          mockChange.vehicleList.firstChange),
    };

    component.ngOnChanges(changes);
    expect(component.vehicleList.length).toBe(0);
  });

  it('should return default RowHeight', () => {
    const height = component.getRowHeight({
      node: {
        detail : true
      },
      data : {
        purchases : {
          lineItems : [{
            taxes: [{}, {}]
          }]
        },
        adesaAssuranceStatus : AssuranceStatus.PURCHASED,
        arbitration: {
          status: null
        },
        auctionChannelValue: SalesChannel.SIMULCAST,
        lbRunNumber: '25',
        lbLaneNumber: 'A'

      }
    });
    expect(height).toBe(506);
  });

  xit('should setFilters, isFilterPresent and filterData', () => {
    let filters = {
      dummy: 'dummy'
    } as any;
    let setFilters = component.setFilters(filters);
    expect(setFilters).toEqual(undefined);

    const isFilterPresent = component.isFilterPresent();
    expect(isFilterPresent).toBe(true);

    let node = {
      data: {
        dummy: 'dummy'
      }
    } as any;

    let filterData = component.filterData(node);
    expect(filterData).toEqual(false);

    filters = {
      saleDate: ['Last 7 Days']
    };
    node = {
      data: {
        soldDateMMDDYY: '02/02/02'
      }
    };

    setFilters = component.setFilters(filters);

    filterData = component.filterData(node);

    expect(filterData).toEqual(true);

    filters = {
      saleDate: ['08/20/20']
    };
    node = {
      data: {
        soldDateMMDDYY: '20/10/20'
      }
    };
    setFilters = component.setFilters(filters);

    filterData = component.filterData(node);
    expect(filterData).toEqual(false);

    node = {
      data: {
        vinTrimmed: 'testing',
        titleStatus: {
          status: 'testing'
        },
        soldDateMMDDYY: '08/20/20'
      }
    };
    filterData = component.filterData(node);
    expect(filterData).toEqual(true);

    filters = {
      saleDate: ['08/20/20 - 08/30/20']
    };
    setFilters = component.setFilters(filters);
    filterData = component.filterData(node);
    expect(filterData).toEqual(true);

    filters = {
      vin: 'testing'
    };

    setFilters = component.setFilters(filters);
    filterData = component.filterData(node);
    expect(filterData).toEqual(true);

    filters = {
      titleStatus: ['All']
    };

    setFilters = component.setFilters(filters);
    filterData = component.filterData(node);
    expect(filterData).toEqual(true);

    filters = {
      titleStatus: ['testing']
    };

    setFilters = component.setFilters(filters);
    filterData = component.filterData(node);
    expect(filterData).toEqual(true);
  });

  it('should pageSelectionOutputEventHandler', () => {
    const value = 10;
    const method = component.pageSelectionOutputEventHandler(value);
    expect(component.pageSize).toBe(10);
  });

  it('should call onPaginationChanged', () => {
    const spySetCollapseOnPageFilter = spyOn(component.viewActions, 'setCollapseOnPageFilter');
    const method = component.onPaginationChanged({
      type : 'paginationChanged',
      newPage : true,
      newData: null,
    } as PaginationChangedEvent);
    expect(spySetCollapseOnPageFilter).toHaveBeenCalled();
  });

  it('should call exportToCsv', () => {

    const spySetExportType = spyOn(component.viewActions, 'setExportType');
    component['gridOptions'] = {} as GridOptions;
    component['gridOptions']['api'] = {} as GridApi;
    component.gridOptions.api['forEachNodeAfterFilterAndSort'] = (cb) => {
      cb({
        data : { vin: '123456789'}
      } as RowNode, 0);
    };
    component.exportToCsv();
    expect(spySetExportType).toHaveBeenCalled();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
