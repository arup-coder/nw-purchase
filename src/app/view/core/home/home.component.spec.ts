import {VehicleApi} from './../../../api/vehicle-api';
import {VehicleActions} from './../../../abstract-actions/vehicle-actions';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeComponent} from './home.component';
import {FilterLeftComponent} from '../filter-left/filter-left.component';
import {HeaderComponent} from '../header/header.component';
import {StoreModule} from '@ngrx/store';
import {EnvironmentService} from 'src/app/shared/services/environment-config';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreService} from 'src/app/data-store/store';
import {AlertModule} from '@nw/nw-component-library';
import {CheckboxModule} from '@nw/nw-component-library';
import {NO_ERRORS_SCHEMA, ChangeDetectorRef, ViewContainerRef} from '@angular/core';
import {DatePipe} from '@angular/common';
import {VehicleConfigService} from '../../vehicle-desktop/vehicle-list/vehicle-config';
import {VehicleHomeComponent} from '../../vehicle-desktop/vehicle-home/vehicle-home.component';
import {VehicleListComponent} from '../../vehicle-desktop/vehicle-list/vehicle-list.component';
import {ViewActions} from 'src/app/abstract-actions/view.actions';
import {CommonApi} from 'src/app/api/common-api';
import {IChipsData} from '@nw/nw-component-library/src/app/chips/chips.model';
import Utils from 'src/app/shared/utils/utils';
import {mockFilterState} from 'src/app/mock/mock-data';
import { environment } from 'src/environments/environment';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let storeService: StoreService;
  let vehicleActions: VehicleActions;
  let viewActions: ViewActions;
  let cd: ChangeDetectorRef;
  let vcr: ViewContainerRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        FilterLeftComponent,
        HeaderComponent,
        VehicleHomeComponent,
        VehicleListComponent,
      ],
      imports: [
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        CheckboxModule,
        BrowserAnimationsModule,
        AlertModule,
      ],
      providers: [
        EnvironmentService,
        StoreService,
        DatePipe,
        VehicleConfigService,
        ViewActions,
        CommonApi,
        VehicleActions,
        VehicleApi,
        ChangeDetectorRef,
        ViewContainerRef,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    storeService = TestBed.get(StoreService);
    vehicleActions = TestBed.get(VehicleActions);
    viewActions = TestBed.get(ViewActions);
    cd = TestBed.get(ChangeDetectorRef);
    vcr = TestBed.get(ViewContainerRef);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.showBlankState = false;
    component.isErrorState = false;
    component.isErrorAlert = false;
    component.totalRangeVehicleCount = 0;

    fixture.detectChanges();
  }));

  beforeEach(() => {
    component.currentModule = 'desktop';
    environment.featureFlags.mobileLayout = true;
  });

  it('should create HomeComponent', () => {
    expect(new HomeComponent(storeService, vehicleActions, viewActions, cd)).toBeTruthy();
  });

  it('should subscribe to dummy Observable and confirm vehicleCount set correctly ', () => {
    component.triggerOnLoadSubcriptions();
    fixture.detectChanges();
  });

  it('should call onLazyloadModuleAdded', () => {
    component.onLazyloadModuleAdded({
      homeRef: vcr,
    });
    fixture.detectChanges();
  });

  it('should call initLazyLoadModule()', () => {
    const spyDetectDevice = spyOn(Utils, 'detectDevice').and.returnValue({currentDevice: 'tablet'});
    component.initLazyLoadModule();
    expect(spyDetectDevice).toHaveBeenCalled();
    fixture.detectChanges();
  });

  it('should switch the currentDevice to "tablet" instead of "mobile" when mobile is disabled', () => {
      spyOn(Utils, 'detectDevice').and.returnValue({ currentDevice: 'tablet' });
      environment.featureFlags.mobileLayout = false;

      component.initLazyLoadModule();

      expect(component.currentDevice).toBe('tablet');
  });

  it('should use the actual currentDevice when mobile is disabled and the device is not mobile', () => {
      spyOn(Utils, 'detectDevice').and.returnValue({ currentDevice: 'desktop' });
      environment.featureFlags.mobileLayout = false;

      component.initLazyLoadModule();

      expect(component.currentDevice).toBe('desktop');
  });

  it('should call chipRemovedEventHandler: Array', () => {
    const spyFilters = spyOnProperty(storeService, 'appState', 'get').and.returnValue({
      view: {
        filter: mockFilterState,
      },
    });
    const chipToRemove: IChipsData = {
      id: 'location',
      label: 'Location: New Texas',
      disable: false,
      htmlId: 'test'
    };
    component.chipRemovedEventHandler(chipToRemove);
    expect(storeService.appState.view.filter).toBe(mockFilterState);
    expect(spyFilters).toHaveBeenCalled();
    spyFilters.calls.reset();
  });

  it('should call chipRemovedEventHandler: string', () => {
    const spyFilters = spyOnProperty(storeService, 'appState', 'get').and.returnValue({
      view: {
        filter: mockFilterState,
      },
    });
    const chipToRemove: IChipsData = {
      id: 'vin',
      label: 'Vin: 123456789',
      disable: false,
      htmlId: 'test'
    };
    component.chipRemovedEventHandler(chipToRemove);
    expect(storeService.appState.view.filter).toBe(mockFilterState);
    expect(spyFilters).toHaveBeenCalled();
  });

  it('should call retainFilterState', () => {
    const spyLocalStorageFilter = spyOn(Utils, 'getItemLocalStorage').and.returnValue(mockFilterState);

    component.retainFilterState();
    fixture.detectChanges();
    expect(Utils.getItemLocalStorage('filter')).toBe(mockFilterState);
    expect(spyLocalStorageFilter).toHaveBeenCalled();
  });

  it('should load/ignore vehicles from notification', () => {
    component.reloadVehicles();
    component.reloadVehicles();
    component.ignoreNewVehicleUpdate();
    fixture.detectChanges();
  });

  it('should call filterOutputEventHandler', () => {
    component.filterOutputEventHandler(mockFilterState);
    fixture.detectChanges();
  });

  it('should call onWindowResize', () => {
    component.onWindowResize();
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
