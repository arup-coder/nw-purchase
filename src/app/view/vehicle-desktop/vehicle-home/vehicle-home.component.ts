import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import {StoreService} from 'src/app/data-store/store';
import {VehicleActions} from 'src/app/abstract-actions/vehicle-actions';
import {IVehicle} from 'src/app/data-store/models/vehicle.model';
import {AutoUnSubscribe} from 'src/app/shared/decorators/custome.decorators';
import {ViewActions} from 'src/app/abstract-actions/view.actions';
import {VEHICLE_UPDATE_LABELS, IMAGE_PATH, VEHICLE_ALT_LABELS} from '../../vehicle-desktop/vehicle.labels';
import Utils from 'src/app/shared/utils/utils';
import { GLOBAL_SETTINGS } from 'src/app/shared/global-config';



@Component({
  selector: 'nw-purchases-vehicle-home-desktop',
  templateUrl: './vehicle-home.component.html',
  styleUrls: ['./vehicle-home.component.scss', './../desktop.scss'],
  encapsulation: ViewEncapsulation.None
})
@AutoUnSubscribe()
export class VehicleHomeComponent implements OnInit, OnDestroy {
  public vehicleList: IVehicle[] = null;
  public showLoader: boolean;

  constructor(
    private storeService: StoreService,
    private vehicleActions: VehicleActions,
    private viewActions: ViewActions,
  ) { }

  ngOnInit() {
    this.vehicleActions.loadAllVehicle();
    this.triggerAllStoreSubcriptions();
  }

  triggerAllStoreSubcriptions() {
    this.storeService.mapProps('vehicle', 'vehicles')
        .subscribe((data: IVehicle[]) => {
          if (data.length > 0) {
            this.vehicleList = data;
          }
        });

    this.storeService.mapProps('view', 'showLoader')
        .subscribe((data: boolean) => {
          this.showLoader = data;
        });

    this.storeService.mapProps('vehicle', 'recentPurchasedVehicleCount')
        .subscribe((data: number) => {
          if (data > 0) {
            this.viewActions.setAlertConfig(
                Utils.getAlertConfigForNewVehicles(
                    data,
                    VEHICLE_UPDATE_LABELS,
                    IMAGE_PATH,
                    VEHICLE_ALT_LABELS,
                ));
          }
        });

    this.storeService.mapProps('vehicle', 'selectedRangeVehicleCount')
        .subscribe((data: number) => {
          if (data > Number(GLOBAL_SETTINGS.ETR.pageSize)) {
            this.viewActions.setAlertConfig(
                Utils.getAlertConfigMaxVehicleLimit(
                  IMAGE_PATH,
                  VEHICLE_ALT_LABELS,
                ));
          }
        });

  }

  ngOnDestroy() { }
}
