import { IVehicle } from '../../../../../data-store/models/vehicle.model';
import { Component, Input, OnInit } from '@angular/core';
import { VEHICLE_ALT_LABELS, VEHICLE_LABELS, IMAGE_PATH } from '../../../vehicle.labels';
import { SalesChannel, PaymentStatus } from 'src/app/shared/enums/enum';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'nw-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss'],
})
export class BasicDetailsComponent implements OnInit {
  @Input() data: IVehicle = null;
  @Input() idUniqueField: string = null;
  readonly vehicleAltLabels = VEHICLE_ALT_LABELS;
  readonly headTitle = VEHICLE_LABELS.usa.drawerHeadTitles;
  readonly localSalesChannel = SalesChannel;
  readonly localpaymentStatus = PaymentStatus;
  readonly hiddenLocationText = VEHICLE_LABELS.usa.hiddenLocationText;

  vehicleInfoImg = IMAGE_PATH.vehicleInfoImg;
  purchaseDetailsImg = IMAGE_PATH.purchaseDetailsImg;
  locationImg = IMAGE_PATH.locationImg;

  public hideLocation = false;

  ngOnInit() {
    this.locationVisibility();
  }

  locationVisibility() {
    if (!isNullOrUndefined(this.data)) {
      if (this.data.auctionChannel === this.localSalesChannel.DEALERBLOCK && (this.data.paymentStatus === this.localpaymentStatus.DUE ||
        this.data.paymentStatus === this.localpaymentStatus.VOIDFEESDUE)) {
        this.hideLocation = true;
      } else {
        this.hideLocation = false;
      }
    }
  }
}
