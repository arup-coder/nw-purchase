import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
    selector: 'nw-purchases-assurance-vin',
    template: `
  <span *ngIf="params?.data?.assurance?.isEligible" class="font-weight-bold assurance-icon-row assurance-icon-enabled" id="{{params?.data?.vin + '_adesa-assurance_img'}}" ></span>
  <span id="{{params?.data?.vin + '_vin-trimmed'}}">{{params?.data?.vinTrimmed}}</span>
  `
})
export class CellAssuranceVinRenderer implements ICellRendererAngularComp {

    public params: ICellRendererParams;

    agInit(params: ICellRendererParams): void {
        this.params = params;
    }

    refresh(params: ICellRendererParams): boolean {
        return true;
    }
}
