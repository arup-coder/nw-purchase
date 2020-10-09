import { TitleStatus } from './../../../../shared/enums/enum';
import { Component } from '@angular/core';
import { IVehicle } from '../../../../data-store/models/vehicle.model';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'nw-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements ICellRendererAngularComp {
  public data: IVehicle;
  public readonly idUniqueField: string = 'vin';
  public readonly localTitleStatus = TitleStatus;
  // called on init
  agInit(params: any): void {
    this.data = params.data || {};
  }
  // called when the cell is refreshed
  refresh(params: any): boolean {
    return false;
  }
}
