import {CardModule} from '@nw/nw-component-library';
import {SharedModule} from '../../shared/shared.module';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MobileVehicleListComponent} from './vehicle-list/vehicle-list.component';
import {VehicleHomeComponent} from './vehicle-home/vehicle-home.component';
import { FooterActionBarComponent } from './footer-action-bar/footer-action-bar.component';
import { PaymentStatusComponent } from './common/nw-purchases-payment-status/nw-purchases-payment-status';


@NgModule({
  declarations: [
    VehicleHomeComponent,
    MobileVehicleListComponent,
    FooterActionBarComponent,
    PaymentStatusComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CardModule,
  ],
  providers: [

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],
  bootstrap: [
    VehicleMobileModule.rootComponent,
  ],
})

export class VehicleMobileModule {
  public static rootComponent = VehicleHomeComponent;
}
