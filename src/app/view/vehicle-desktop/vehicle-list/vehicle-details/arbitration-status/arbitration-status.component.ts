import { ArbitrationStatusUi, ArbitrationStatus } from './../../../../../shared/enums/enum';
import {VEHICLE_ALT_LABELS, VEHICLE_LABELS, IMAGE_PATH} from '../../../vehicle.labels';
import {IVehicle} from '../../../../../data-store/models/vehicle.model';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'nw-arbitration-status',
  templateUrl: './arbitration-status.component.html',
  styleUrls: ['./arbitration-status.component.scss'],
})
export class ArbitrationStatusComponent {
  @Input() data: IVehicle = null;
  @Input() idUniqueField: string = null;
  public readonly arbitrationImg = IMAGE_PATH.arbitrationImg;
  public readonly vehicleAltLabels = VEHICLE_ALT_LABELS;
  public readonly headTitle = VEHICLE_LABELS['usa']['drawerHeadTitles'];
  public readonly localArbitrationStatusUI = ArbitrationStatusUi;
  public readonly localArbitrationStatus = ArbitrationStatus;
}
