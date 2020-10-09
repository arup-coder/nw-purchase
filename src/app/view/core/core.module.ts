import {FormsModule} from '@angular/forms';
import {VehicleActions} from './../../abstract-actions/vehicle-actions';
import {NgModule, ErrorHandler, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FilterLeftComponent} from './filter-left/filter-left.component';
import {HomeComponent} from './home/home.component';
import {ProgressSpinnerModule, AlertModule, ChipsModule, AccordionModule, CheckboxModule, CalendarModule, ErrorStateModule} from '@nw/nw-component-library';
import {VehicleDesktopModule} from '../vehicle-desktop/vehicle.module';
import {BlankstateComponent} from './blankstate/blankstate.component';
import {AuthHttpInterceptorService} from 'src/app/shared/services/auth-http-interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SharedModule} from 'src/app/shared/shared.module';
import {ThemeModule} from '../theme/theme.module';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { UtilityBarComponent } from './utility-bar/utility-bar.component';
import { BrowserWarningComponent } from './browser-warning/browser-warning.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FilterLeftComponent,
    HomeComponent,
    BlankstateComponent,
    UtilityBarComponent,
    BrowserWarningComponent,
    MobileHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeModule,
    VehicleDesktopModule,
    ProgressSpinnerModule,
    AlertModule,
    AccordionModule,
    ChipsModule,
    CheckboxModule,
    FormsModule,
    CalendarModule,
    ErrorStateModule,
    NgxDaterangepickerMd.forRoot(),
  ],
  exports: [
    HomeComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptorService,
      multi: true,
    },
    VehicleActions
  ],
})
export class CoreModule {

}
