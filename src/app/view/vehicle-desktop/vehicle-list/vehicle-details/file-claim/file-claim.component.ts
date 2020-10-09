import { AssuranceStatusUi, AssuranceStatus } from './../../../../../shared/enums/enum';
import {IVehicle} from '../../../../../data-store/models/vehicle.model';
import {Component, Input} from '@angular/core';
import { VEHICLE_LABELS } from '../../../vehicle.labels';

@Component({
  selector: 'nw-file-claim',
  templateUrl: './file-claim.component.html',
  styleUrls: ['./file-claim.component.scss'],
})
export class FileClaimComponent {
  @Input() data: IVehicle = null;
  @Input() idUniqueField: string = null;
  public localAssuranceStatusUi = AssuranceStatusUi;
  public localAssuranceStatus = AssuranceStatus;
  readonly headTitle = VEHICLE_LABELS['usa']['drawerHeadTitles'];
}
