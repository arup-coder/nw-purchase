import {VEHICLE_ALT_LABELS, VEHICLE_LABELS, IMAGE_PATH} from '../../../vehicle.labels';
import {IVehicle} from '../../../../../data-store/models/vehicle.model';
import {Component, OnInit, Input} from '@angular/core';
import { postSaleInspectionFormatter } from '../../../ag-grid-formatter';

@Component({
  selector: 'nw-purchases-psi-status',
  templateUrl: './psi-status.component.html',
  styleUrls: ['./psi-status.component.scss']
})
export class PsiStatusComponent implements OnInit {
  @Input() data: IVehicle;
  @Input() idUniqueField: string = null;
  public psiStatus: string;

  public readonly psiStatusImg = IMAGE_PATH.titleTracking;
  public readonly vehicleAltLabels = VEHICLE_ALT_LABELS;
  readonly headTitle = VEHICLE_LABELS['usa']['drawerHeadTitles'];

  ngOnInit() {
    this.psiStatus = postSaleInspectionFormatter({ data: this.data});
  }
}
