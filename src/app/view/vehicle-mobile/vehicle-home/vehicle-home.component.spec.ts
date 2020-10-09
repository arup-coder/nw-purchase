import {VehiclesMockData} from '../../../mock/mock-data';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CheckboxModule} from '@nw/nw-component-library';
import {NO_ERRORS_SCHEMA, SimpleChanges, SimpleChange} from '@angular/core';
import {ViewActions} from 'src/app/abstract-actions/view.actions';
import {StoreService} from 'src/app/data-store/store';
import {VehicleHomeComponent} from './vehicle-home.component';
import {VehicleActions} from 'src/app/abstract-actions/vehicle-actions';
import {VehicleApi} from 'src/app/api/vehicle-api';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CommonApi} from 'src/app/api/common-api';
import {of} from 'rxjs/internal/observable/of';
import Utils from 'src/app/shared/utils/utils';

describe('VehicleHomeComponent', () => {
  let component: VehicleHomeComponent;
  let fixture: ComponentFixture<VehicleHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CheckboxModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
      ],
      providers: [VehicleActions, ViewActions, StoreService, VehicleApi, CommonApi],
      declarations: [
        VehicleHomeComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleHomeComponent);
    component = fixture.componentInstance;
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

    const changes: SimpleChanges = {
      vehicleList: new SimpleChange(mockChange.vehicleList.previousValue, mockChange.vehicleList.currentValue,
          mockChange.vehicleList.firstChange),
    };

    component.ngOnChanges(changes);
    expect(component.vehicleList.length).toBe(mockVehicleList.length);
  });

  it('should subscribe to dummy Observable and confirm vehicleList set correctly', () => {
    const mockVehicleList = VehiclesMockData;
    const storeInstance = TestBed.get(StoreService);
    spyOn(storeInstance, 'mapProps').and.returnValue(of(mockVehicleList));
    component.triggerAllStoreSubcriptions();
    fixture.detectChanges();
    expect(component.vehicleList.length).toBe(mockVehicleList.length);
  });

  it('should subscribe to dummy Observable and confirm getAlertConfigForNewVehicles is called', () => {
    const mockNewVehiclesCount = 3;
    const storeInstance = TestBed.get(StoreService);
    spyOn(storeInstance, 'mapProps').and.returnValue(of(mockNewVehiclesCount));
    spyOn(Utils, 'getAlertConfigForNewVehicles').and.returnValue(of(mockNewVehiclesCount));
    component.triggerAllStoreSubcriptions();
    fixture.detectChanges();
    expect(Utils.getAlertConfigForNewVehicles).toHaveBeenCalled();
  });


  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
