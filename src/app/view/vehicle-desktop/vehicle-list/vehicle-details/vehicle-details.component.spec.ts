import {ArbitrationStatusComponent} from './arbitration-status/arbitration-status.component';
import {FileClaimComponent} from './file-claim/file-claim.component';
import {TitleTrackingComponent} from './title-tracking/title-tracking.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BasicDetailsComponent} from './basic-details/basic-details.component';
import {VehicleConfigService} from './../vehicle-config';
import {SharedModule} from './../../../../shared/shared.module';
import {FinanceDetailsComponent} from './finance-details/finance-details.component';
import {VehicleDetailsComponent} from './vehicle-details.component';
import { VehiclesMockData } from 'src/app/mock/mock-data';
import { IVehicle } from 'src/app/data-store/models/vehicle.model';
import { PsiStatusComponent } from './psi-status/psi-status.component';

describe('VehicleDetailsComponent', () => {
  let component: VehicleDetailsComponent;
  let fixture: ComponentFixture<VehicleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleDetailsComponent, FinanceDetailsComponent, BasicDetailsComponent,
        TitleTrackingComponent, FileClaimComponent, ArbitrationStatusComponent, PsiStatusComponent],
      imports: [SharedModule],
      providers: [VehicleConfigService],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should call agInit and assign value to data', () => {
    const fakeData = { data : {} as IVehicle };
    component.agInit(fakeData);
    expect(component.data).toEqual(fakeData.data);
  });


  it('should call agInit and assign value to data', () => {
    const fakeData = { data : null };
    component.agInit(fakeData);
    expect(component.data).toEqual({});
  });

  it('should call refresh', () => {
    const result = component.refresh(VehiclesMockData[0]);
    expect(result).toEqual(false);
  });

});
