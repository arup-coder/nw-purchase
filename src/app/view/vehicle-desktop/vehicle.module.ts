import {FormsModule} from '@angular/forms';
import {CheckboxModule, ErrorStateModule} from '@nw/nw-component-library';
import {SharedModule} from '../../shared/shared.module';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {DatePipe, CommonModule} from '@angular/common';
import {AgGridModule} from 'ag-grid-angular';
import {VehicleListComponent} from './vehicle-list/vehicle-list.component';
import {VehicleHomeComponent} from './vehicle-home/vehicle-home.component';
import {VehicleDetailsComponent} from './vehicle-list/vehicle-details/vehicle-details.component';
import {BasicDetailsComponent} from './vehicle-list/vehicle-details/basic-details/basic-details.component';
import {FinanceDetailsComponent} from './vehicle-list/vehicle-details/finance-details/finance-details.component';
import {TitleTrackingComponent} from './vehicle-list/vehicle-details/title-tracking/title-tracking.component';
import {ArbitrationStatusComponent} from './vehicle-list/vehicle-details/arbitration-status/arbitration-status.component';
import {FileClaimComponent} from './vehicle-list/vehicle-details/file-claim/file-claim.component';
import {CellLinkRenderer} from './ag-grid-cell-renderer/cell-link-renderer/cell-link-renderer';
import {PaginationComponent} from './ag-grid-pagination/ag-grid-pagination.component';
import {PageSizeSelectorComponent} from './page-size-selector/page-size-selector.component';
import { CellTreeTogglerRenderer } from './ag-grid-cell-renderer/cell-link-renderer/cell-tree-toggler-renderer';
import { PsiStatusComponent } from './vehicle-list/vehicle-details/psi-status/psi-status.component';
import { CellTreeTogglerAllRenderer } from './ag-grid-cell-renderer/cell-link-renderer/cell-tree-toggler-all-renderer';
import { CellSalesChannelRenderer } from './ag-grid-cell-renderer/cell-link-renderer/cell-sales-channel-renderer';
import { SkeletonLoaderComponent } from './vehicle-list/skeleton-loader/skeleton-loader.component';
import { CellPaymentStatuslRenderer } from './ag-grid-cell-renderer/cell-payment-status-rendrer/cell-payment-status-rendrer';
import { CellAssuranceVinRenderer } from './ag-grid-cell-renderer/cell-link-renderer/cell-assurance-vin-renderer';

@NgModule({
  declarations: [
    VehicleHomeComponent,
    VehicleListComponent,
    VehicleDetailsComponent,
    BasicDetailsComponent,
    FinanceDetailsComponent,
    TitleTrackingComponent,
    ArbitrationStatusComponent,
    FileClaimComponent,
    CellLinkRenderer,
    PaginationComponent,
    PageSizeSelectorComponent,
    CellTreeTogglerRenderer,
    PsiStatusComponent,
    CellTreeTogglerAllRenderer,
    CellSalesChannelRenderer,
    SkeletonLoaderComponent,
    CellPaymentStatuslRenderer,
    CellAssuranceVinRenderer
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CheckboxModule,
    ErrorStateModule,
    AgGridModule.withComponents([
      CellLinkRenderer,
      VehicleDetailsComponent,
      CellTreeTogglerRenderer,
      CellTreeTogglerAllRenderer,
      CellSalesChannelRenderer,
      CellPaymentStatuslRenderer,
      CellAssuranceVinRenderer
    ]),
  ],
  providers: [
    DatePipe,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],
  bootstrap: [
    VehicleDesktopModule.rootComponent,
  ],
})

export class VehicleDesktopModule {
  public static rootComponent = VehicleHomeComponent;
}
