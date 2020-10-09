import { EnvironmentService } from './../../../../../shared/services/environment-config';
import {IVehicle} from '../../../../../data-store/models/vehicle.model';
import {IFeesColumns, ILineItem} from '../../../../../data-store/models/vehicle.model';
import {Component, OnChanges, Input, SimpleChanges, OnInit} from '@angular/core';
import {VehicleConfigService} from '../../vehicle-config';
import {VEHICLE_ALT_LABELS, IMAGE_PATH} from '../../../vehicle.labels';

@Component({
  selector: 'nw-finance-details',
  templateUrl: './finance-details.component.html',
  styleUrls: ['./finance-details.component.scss'],
})
export class FinanceDetailsComponent implements OnChanges, OnInit {
  @Input() data: IVehicle = null;
  @Input() idUniqueField: string = null;
  readonly vehicleAltLabels = VEHICLE_ALT_LABELS;

  public lineItems: ILineItem[] = [];
  public columns: IFeesColumns[];
  public feesImg = IMAGE_PATH.lineItemRow;
  public isUsRegion = this.service.configurations.purchase && this.service.configurations.purchase.etrRegion &&
    this.service.configurations.purchase.etrRegion.toLowerCase() === 'us' ? true : false;

  constructor(private vehicleConfig: VehicleConfigService, private service: EnvironmentService) { }

  ngOnChanges(change: SimpleChanges) {
    if ('data' in change && typeof change.data.currentValue !== 'undefined') {
      this.data = change.data.currentValue;
      this.lineItems = (this.data.purchases && this.data.purchases.lineItems) ? this.data.purchases.lineItems : [];
    }
    this.idUniqueField = ('idUniqueField' in change && typeof change.idUniqueField.currentValue !== 'undefined') ?
      change.idUniqueField.currentValue : this.idUniqueField;
  }

  ngOnInit() {
    this.columns = this.vehicleConfig.vehicleSoldTableFinanceSectionTableColumnMetaData;
  }

  getCellId(id: string, lineItemDescription: string, name?: string) {
    let description = String(lineItemDescription);
    if (description.split(' ').length > 1) {
      description = description.split(' ').join('-');
    }
    if (name && name !== 'FEES') {
      return `${id}_${description}_${name}`;
    } else {
      return `${id}_${description}`;
    }
  }
}
