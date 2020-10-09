import {Component, OnInit, OnDestroy, Input, OnChanges, ViewEncapsulation} from '@angular/core';
import {StoreService} from 'src/app/data-store/store';
import {VehicleActions} from 'src/app/abstract-actions/vehicle-actions';
import {IVehicle} from 'src/app/data-store/models/vehicle.model';
import {AutoUnSubscribe} from 'src/app/shared/decorators/custome.decorators';
import {ViewActions} from 'src/app/abstract-actions/view.actions';
import Utils from 'src/app/shared/utils/utils';
import {VEHICLE_UPDATE_LABELS, IMAGE_PATH, VEHICLE_ALT_LABELS} from '../vehicle.label';

@Component({
  selector: 'nw-purchases-mob-body',
  templateUrl: './vehicle-home.component.html',
  styleUrls: ['./vehicle-home.component.scss', './../mobile.scss'],
  encapsulation: ViewEncapsulation.None
})
@AutoUnSubscribe()
export class VehicleHomeComponent implements OnInit, OnDestroy, OnChanges {
  @Input() public showLoader: boolean;
  @Input() public vehicleList: IVehicle[] = null;


  constructor(
    private storeService: StoreService,
    private vehicleActions: VehicleActions,
    private viewActions: ViewActions,
  ) { }

  ngOnInit() {
    this.vehicleActions.loadAllVehicle();
    this.triggerAllStoreSubcriptions();
  }

  ngOnChanges(change) {
    /* istanbul ignore else */
    if ('vehicleList' in change && typeof change.vehicleList.currentValue !== 'undefined') {
      this.vehicleList = change.vehicleList.currentValue;
    }
  }

  triggerAllStoreSubcriptions() {
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
    this.storeService.mapProps('vehicle', 'vehicles')
        .subscribe((data: IVehicle[]) => {
          if (data.length > 0) {
            this.vehicleList = data;
          }
        });
  }

  ngOnDestroy() { }
}
