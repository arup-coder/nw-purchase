import {IVehicle} from 'src/app/data-store/models/vehicle.model';
import {Component, Input} from '@angular/core';
import { TitleStatus, TitleStatusUi } from 'src/app/shared/enums/enum';

@Component({
  selector: 'nw-purchases-mobile-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class MobileVehicleListComponent {
  @Input() vehicleList: IVehicle[] = null;
  public idUniqueField = 'vin';
  public titleStatus = TitleStatus;
  public titleStatusUi = TitleStatusUi;
  constructor() {

  }

}
