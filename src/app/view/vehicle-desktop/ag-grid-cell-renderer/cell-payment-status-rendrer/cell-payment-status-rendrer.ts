import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { PaymentStatus, PaymentStatusUi } from 'src/app/shared/enums/enum';
import { isNullOrUndefined } from 'util';
import Utils from 'src/app/shared/utils/utils';

@Component({
    selector: 'payment-status-cell',
    templateUrl: './cell-payment-status-rendrer.html',
    styleUrls: ['./cell-payment-status-rendrer.scss'],
})

export class CellPaymentStatuslRenderer implements ICellRendererAngularComp {
    public status: string;
    public balance: string;
    public statusBoxCSS: string;
    public vin: string;

    refresh(params: any): boolean {
        this.status = params.value;
        return true;
    }
    agInit(params: ICellRendererParams): void {
        if (!isNullOrUndefined(params.data.paymentStatus)) {
            this.vin = params.data.vin;
            switch (params.data.paymentStatus) {
                case (PaymentStatus.PAID):
                    {
                        this.status = PaymentStatusUi.PAID;
                        this.balance = '';
                        this.statusBoxCSS = 'ps-paid';
                    }
                    break;
                case (PaymentStatus.VOID):
                    {
                        this.status = PaymentStatusUi.VOID;
                        this.balance = '';
                        this.statusBoxCSS = 'ps-void';
                    }
                    break;
                case (PaymentStatus.DUE):
                    {
                        this.status =  PaymentStatusUi.DUE;
                        this.balance = Utils.formatNumber(params.data.totalAmountDue);
                        this.statusBoxCSS = 'ps-due';
                    }
                    break;
                case (PaymentStatus.VOIDFEESDUE):
                    {
                        this.status =  PaymentStatusUi.VOIDFEESDUE;
                        this.balance = Utils.formatNumber(params.data.totalAmountDue);
                        this.statusBoxCSS = 'ps-void-due';
                    }
                    break;
                default:
                    {
                        this.status = '';
                        this.balance = '';
                        this.statusBoxCSS = '';
                    }
            }
        } else {
            this.status = '';
            this.balance = '';
            this.statusBoxCSS = '';
        }
    }
}
