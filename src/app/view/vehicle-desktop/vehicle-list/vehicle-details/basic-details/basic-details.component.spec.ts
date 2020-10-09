
import { BasicDetailsComponent } from './basic-details.component';
import { PhonePipe } from '../../../../../shared/pipes/phone.pipe';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { VehiclesMockData } from 'src/app/mock/mock-data';
import { IVehicle } from 'src/app/data-store/models/vehicle.model';

describe('BasicDetailsComponent', () => {
  let component: BasicDetailsComponent;
  let fixture: ComponentFixture<BasicDetailsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BasicDetailsComponent, PhonePipe],
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should call locationVisibility and assign hideLocation', () => {
    const mockVehicle: IVehicle = VehiclesMockData[0];
    mockVehicle.auctionChannel = 'DEALERBLOCK';
    mockVehicle.paymentStatus = 'DUE';
    component.data = mockVehicle;
    fixture.detectChanges();
    component.locationVisibility();
    expect(component.hideLocation).toBe(true);

    const mockVehicle2: IVehicle = VehiclesMockData[0];
    mockVehicle2.auctionChannel = 'DEALERBLOCK';
    mockVehicle2.paymentStatus = 'VOIDFEESDUE';
    component.data = mockVehicle2;
    fixture.detectChanges();
    component.locationVisibility();
    expect(component.hideLocation).toBe(true);

    const mockVehicle3: IVehicle = VehiclesMockData[0];
    mockVehicle3.auctionChannel = 'SIMULCAST';
    mockVehicle3.paymentStatus = 'VOIDFEESDUE';
    component.data = mockVehicle3;
    fixture.detectChanges();
    component.locationVisibility();
    expect(component.hideLocation).toBe(false);
  });
});
