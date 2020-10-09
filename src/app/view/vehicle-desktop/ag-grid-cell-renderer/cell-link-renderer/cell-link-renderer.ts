import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';
import {ExternalNavigationService} from 'src/app/shared/services/external-navigation.service';

@Component({
  selector: 'link-cell',
  template: `<span>
    <a [attr.href]="link" class="purchases-btn-cell-link" id="{{params?.data?.vin + '_vehicle'}}">{{
      vehicleTitle
    }}</a>
    </span>`,
})
export class CellLinkRenderer implements ICellRendererAngularComp {
    params: ICellRendererParams;
    vehicleTitle: string;
    type = '';
    link = '';

    constructor(private extNav: ExternalNavigationService ) {
    }

    agInit(params: ICellRendererParams): void {
      this.params = params;
      this.vehicleTitle = params.data.vehicleTitle;
      if (typeof params.colDef.cellRendererParams !== 'undefined') {
        this.type = params.colDef.cellRendererParams;
      }
      this.link = this.formatTheLink();
    }

    formatTheLink() {
      if (this.vehicleTitle == null) {
        return '';
      }
      return `${this.extNav.getETRVdpLink(this.params.data.vdpLink)} `;
    }

    public onChange(event) {
      this.params.data[this.params.colDef.field] = event.currentTarget.checked;
    }

    refresh(params: ICellRendererParams): boolean {
      this.vehicleTitle = params.data.vehicleTitle;
      return true;
    }
}
