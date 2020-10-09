import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import {VehicleHomeComponent} from './vehicle-home.component';
import {CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef} from '@angular/core';
import {VehicleApi} from 'src/app/api/vehicle-api';
import {VehicleActions} from 'src/app/abstract-actions/vehicle-actions';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreService} from 'src/app/data-store/store';
import {ViewActions} from 'src/app/abstract-actions/view.actions';
import {CommonApi} from 'src/app/api/common-api';
import {VehiclesMockData} from 'src/app/mock/mock-data';
import {of} from 'rxjs/internal/observable/of';
import Utils from 'src/app/shared/utils/utils';


describe('VehicleHomeComponent', () => {
  let component: VehicleHomeComponent;
  let fixture: ComponentFixture<VehicleHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleHomeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        StoreService,
        VehicleActions,
        VehicleApi,
        ViewActions,
        CommonApi,
        ChangeDetectorRef,
      ],
      imports: [
        HttpClientTestingModule,
      ],
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
    const storeService = TestBed.get(StoreService);
    const vehicleActions = TestBed.get(VehicleActions);
    const viewActions = TestBed.get(ViewActions);
    const cd = TestBed.get(ChangeDetectorRef);
    expect(new VehicleHomeComponent(storeService, vehicleActions, viewActions)).toBeTruthy();
  });

  it('should call ngOnInit ', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to dummy Observable and confirm vehicleList set correctly ', () => {
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
});


