import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HomeComponent} from './view/core/home/home.component';
import {VehicleApi} from './api/vehicle-api';
import {VehicleActions} from './abstract-actions/vehicle-actions';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NO_ERRORS_SCHEMA, ChangeDetectorRef} from '@angular/core';
import {CommonApi} from './api/common-api';
import {ViewActions} from './abstract-actions/view.actions';
import {StoreService} from './data-store/store';
import {IntercomModule, Intercom } from 'ng-intercom';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        IntercomModule.forRoot({
          appId: 'jjy9q9c8' })  
      ],
      providers: [
        VehicleApi,
        VehicleActions,
        CommonApi,
        ViewActions,
        StoreService,
        ChangeDetectorRef,
        Intercom
      ],
      declarations: [
        AppComponent,
        HomeComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    const cd = TestBed.get(ChangeDetectorRef);
    const intercom = TestBed.get(Intercom);
    expect(new AppComponent(cd, intercom)).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
