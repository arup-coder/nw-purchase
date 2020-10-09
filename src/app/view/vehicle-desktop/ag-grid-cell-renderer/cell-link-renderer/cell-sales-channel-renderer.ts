import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { IMAGE_PATH, VEHICLE_ALT_LABELS } from '../../vehicle.labels';
import { SalesChannel } from 'src/app/shared/enums/enum';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'sales-channel-cell',
    template: `<span *ngIf="showSalesChannelLogo">
    <img src="{{salesChannelLogo}}" id="{{vin + '_sales-channel-logo'}}" alt="{{salesChannelLabel}}" />
    <div id="{{vin + '_sales-channel-text'}}" >{{salesChannelText}}</div>
    </span>`,
})
export class CellSalesChannelRenderer implements ICellRendererAngularComp {
    salesChannelText: string;
    salesChannelLogo: string;
    salesChannelLabel: string;
    showSalesChannelLogo = true;
    vin: string;

    refresh(params: any): boolean {
        return true;
    }
    agInit(params: ICellRendererParams): void {
        this.vin = params.data.vin;
        if (!isNullOrUndefined(params.data.auctionChannelValue)) {
            this.salesChannelLabel = VEHICLE_ALT_LABELS.salesChannelLogo;
            switch (params.data.auctionChannelValue) {
                case (SalesChannel.SIMULCAST):
                    {
                        this.salesChannelLogo = IMAGE_PATH.adesaLogoImg;
                        this.salesChannelText = SalesChannel.SIMULCAST_UI;
                    }
                    break;
                case (SalesChannel.INLANE):
                    {
                        this.salesChannelLogo = IMAGE_PATH.adesaLogoImg;
                        this.salesChannelText = SalesChannel.INLANE_UI;
                    }
                    break;
                case (SalesChannel.DEALERBLOCK):
                    {
                        this.salesChannelLogo = IMAGE_PATH.adesaLogoImg;
                        this.salesChannelText = SalesChannel.DEALERBLOCK_UI;
                    }
                    break;
                case (SalesChannel.TRADEREV):
                    {
                        this.salesChannelLogo = IMAGE_PATH.traderevLogoImg;
                        this.salesChannelText = '';
                    }
                    break;
                default:
                    {
                        this.salesChannelLogo = '';
                        this.salesChannelText = '';
                    }

            }
        } else {
            this.showSalesChannelLogo = false;
            this.salesChannelLogo = '';
            this.salesChannelText = '';
        }

    }


}
