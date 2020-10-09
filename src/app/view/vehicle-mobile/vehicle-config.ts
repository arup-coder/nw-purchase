import {Injectable} from '@angular/core';
import {IFeesColumns} from 'src/app/data-store/models/vehicle.model';
import {VehicleMobileModule} from './vehicle.module';

@Injectable({
  providedIn: VehicleMobileModule,
})
export class VehicleConfigService {
  private _vehicleModelPK = 'nwVehicleId';
  private _vehicleModelID = 'vin';

  private _checkboxSize = 6;

  private _expandableSize = 7;

  private _vehicleSoldTableFinanceSectionTableColumnMetaData: IFeesColumns[] = [{
    field: 'lineItemDescription',
    header: 'Fee',
    type: 'string',
  },
  {
    field: 'amount',
    header: 'Cost',
    type: 'currency',
  },
  {
    field: 'taxes',
    header: 'Tax',
    type: 'array',
    childColumns: {
      field: 'amount',
      type: 'currency',
    },
  },
  // To be added after September release
    // {
    //   field: 'paymentStatus',
    //   header: 'Status',
    //   type: 'status'
    // }
  ];

  get vehicleModelPK() {
    return this._vehicleModelPK;
  }

  get vehicleModelID() {
    return this._vehicleModelID;
  }

  get checkboxSize() {
    return this._checkboxSize;
  }

  get expandableSize() {
    return this._expandableSize;
  }

  get vehicleSoldTableFinanceSectionTableColumnMetaData() {
    return this._vehicleSoldTableFinanceSectionTableColumnMetaData;
  }
}
