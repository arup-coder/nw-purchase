import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';
import { IMAGE_PATH } from '../../vehicle.labels';
import { StoreService } from 'src/app/data-store/store';
import { ICellRendererParamswithCB } from 'src/app/shared/custom_types/custom.types';

@Component({
  selector: 'nw-purchases-tree-toggler',
  template: `
    <div class="toggle-icon-wrappers purchases-btn-toggle-single d-flex p-3"  id="{{ params?.node?.data?.vin + '_toggle_single' }}" (click)="toggle()">
    <img *ngIf="!expanded" alt="expand single vehicles image" [src]="expandedFalseIcon" class="purchases-btn-toggle-single">
    <img *ngIf="expanded" alt="expand single vehicles image" [src]="expandedTrueIcon" class="purchases-btn-toggle-single">
    </div>
  `,
  styles: ['.toggle-icon-wrappers { cursor: pointer; }']
})
export class CellTreeTogglerRenderer implements ICellRendererAngularComp {

    public params: ICellRendererParamswithCB;
    public expanded = false;
    public expandedFalseIcon = IMAGE_PATH.expandedFalse;
    public expandedTrueIcon = IMAGE_PATH.expandedTrue;

    constructor(
      private storeService: StoreService
    ) {
    }

    agInit(params: ICellRendererParams): void {
      this.params = params;
      this.initStoreSubscription();
    }

    refresh(params: ICellRendererParams): boolean {
      return true;
    }

    toggle() {
       this.expanded = !Boolean(this.params.node.expanded);
       this.params.node.setExpanded(!Boolean(this.params.node.expanded));
       this.params.parentCallBack('setExpandForSingleRow', this.expanded);
    }

    initStoreSubscription() {
      this.storeService.mapProps('view', 'expandAllForRows')
      .subscribe((data: boolean) => {
          this.expanded = data;
      });
    }
}
