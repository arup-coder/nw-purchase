import { TitleStatusUi, TitleStatus } from './../../../../../shared/enums/enum';
import {VEHICLE_ALT_LABELS, VEHICLE_LABELS, IMAGE_PATH} from '../../../vehicle.labels';
import {IVehicle} from '../../../../../data-store/models/vehicle.model';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'nw-title-tracking',
  templateUrl: './title-tracking.component.html',
  styleUrls: ['./title-tracking.component.scss'],
})
export class TitleTrackingComponent {
  @Input() data: IVehicle = null;
  @Input() idUniqueField: string = null;

  public titleStatus = TitleStatus;
  public titleStatusUi = TitleStatusUi;
  public readonly titleTrackingImg = IMAGE_PATH.titleTracking;
  public readonly vehicleAltLabels = VEHICLE_ALT_LABELS;
  readonly headTitle = VEHICLE_LABELS['usa']['drawerHeadTitles'];

}
