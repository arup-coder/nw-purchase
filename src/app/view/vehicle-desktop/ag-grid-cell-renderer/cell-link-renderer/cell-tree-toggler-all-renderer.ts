import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import { IMAGE_PATH } from '../../vehicle.labels';
import { StoreService } from 'src/app/data-store/store';
import { ICellRendererParamswithCB } from 'src/app/shared/custom_types/custom.types';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'nw-purchases-tree-toggler-all',
  template: `
    <div class="toggle-icon-wrappers purchases-btn-toggle-all" id="toggle-all-detail-drawers" (click)="toggle()">
    <img *ngIf="!expanded" alt="expand all vehicles image" class="purchases-btn-toggle-all" [src]="expandAllIcon">
    <img *ngIf="expanded" alt="expand all vehicles image" [src]="collapseAllIcon" class="purchases-btn-toggle-all">
    </div>
  `,
  styles: ['.toggle-icon-wrappers { cursor: pointer; }']
})
export class CellTreeTogglerAllRenderer implements ICellRendererAngularComp {

    public params: ICellRendererParamswithCB;
    public expanded = false;
    public expandAllIcon = IMAGE_PATH.expandAll;
    public collapseAllIcon = IMAGE_PATH.collapseAll;
    public accumulateSingleExpand: boolean[] =  [];
    public lastPageRecords: number;
    public lastPage: number;

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
            const pageSize = this.params.api.paginationGetPageSize();
            const curPage = this.params.api.paginationGetCurrentPage();

            this.expanded = !Boolean(this.expanded);
            this.params.api.forEachNodeAfterFilterAndSort((node) => {

              if ( (pageSize * curPage) < (node.childIndex + 1)  &&  (node.childIndex + 1) <=  (pageSize * (curPage + 1) ) ) {
                     if (node.expanded !== this.expanded ) {
                        setTimeout(() => {
                            node.setExpanded( this.expanded );
                         }, 0);
                        (  this.expanded ) ? this.accumulateSingleExpand.push( this.expanded ) : this.accumulateSingleExpand.pop();
                     }
                }
            });
            this.params.parentCallBack('setExpandAllForRows', this.expanded);
    }

    collapseAll(value: boolean) {
        let needRefresh = false;
        this.expanded = value;
        setTimeout(() => {
          this.params.api.forEachNode((node) => {
                if (node.expanded !== this.expanded ) {
                  node.expanded = value;
                  needRefresh = true;
                }
          });
          if (needRefresh) {
            this.params.api.onGroupExpandedOrCollapsed();
            this.params.parentCallBack('setExpandAllForRows', this.expanded);
          }
          this.params.parentCallBack('setCollapseOnPageFilter', true);
      }, 0);
    }

    setCollapseTrueOnAllSingleExpand() {

      this.lastPage = Math.ceil((this.params.api.paginationGetRowCount() / this.params.api.paginationGetPageSize()));
      this.lastPageRecords = this.params.api.paginationGetRowCount() % this.params.api.paginationGetPageSize();

      this.lastPageRecords = (this.lastPage === (this.params.api.paginationGetCurrentPage() + 1 ) && this.lastPageRecords > 0 )
      ? this.lastPageRecords
      : this.params.api.paginationGetPageSize();

      if ( this.accumulateSingleExpand.length === this.lastPageRecords ) {
        this.expanded = true;
      } else if ( this.accumulateSingleExpand.length < this.lastPageRecords ) {
        this.expanded = false;
      }

    }

    initStoreSubscription() {
      this.storeService.mapProps('view', 'collapseOnPageFilter')
      .subscribe((data: boolean) => {
          if ( data === false ) {
             this.collapseAll(data);
             this.accumulateSingleExpand = [];
          }
      });
      this.storeService.mapProps('view', 'expandForSingleRow')
      .subscribe((data: boolean) => {
        if (data !== null ) {
          ( data === false ) ? this.accumulateSingleExpand.pop() : this.accumulateSingleExpand.push(data);
          this.setCollapseTrueOnAllSingleExpand();
          this.params.parentCallBack('setExpandForSingleRow', null);
        }
      });
    }
}
