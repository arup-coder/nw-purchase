import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CardModule} from '@nw/nw-component-library';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MobileVehicleListComponent} from './vehicle-list.component';
import {ViewActions} from 'src/app/abstract-actions/view.actions';
import { PaymentStatusComponent } from '../common/nw-purchases-payment-status/nw-purchases-payment-status';

describe('MobileVehicleListComponent', () => {
  let component: MobileVehicleListComponent;
  let fixture: ComponentFixture<MobileVehicleListComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MobileVehicleListComponent,
        PaymentStatusComponent
      ],
      imports: [CardModule, HttpClientTestingModule ],
      providers: [ViewActions],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileVehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
