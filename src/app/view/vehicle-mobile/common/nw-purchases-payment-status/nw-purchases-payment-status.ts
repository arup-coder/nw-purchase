import { Component, OnInit, Input } from '@angular/core';
import { PaymentStatus, PaymentStatusUi } from 'src/app/shared/enums/enum';
import { isNullOrUndefined } from 'util';
import Utils from 'src/app/shared/utils/utils';
import { IVehicle } from 'src/app/data-store/models/vehicle.model';

@Component({
    selector: 'nw-purchases-payment-status',
    templateUrl: './nw-purchases-payment-status.html',
    styleUrls: ['./nw-purchases-payment-status.scss'],
})

export class PaymentStatusComponent implements OnInit {
    @Input() public data: IVehicle;
    @Input() public showBalance = false;
    public status: string;
    public balance: string;
    public statusBoxCSS: string;
    public vin: string;

    ngOnInit() {
        if (!isNullOrUndefined(this.data.paymentStatus)) {
            this.vin = this.data.vin;
            switch (this.data.paymentStatus) {
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
                        this.balance = Utils.formatNumber(this.data.totalAmountDue);
                        this.statusBoxCSS = 'ps-due';
                    }
                    break;
                case (PaymentStatus.VOIDFEESDUE):
                    {
                        this.status =  PaymentStatusUi.VOIDFEESDUE;
                        this.balance = Utils.formatNumber(this.data.totalAmountDue);
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
