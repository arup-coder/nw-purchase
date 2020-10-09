

import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {GridOptions, GridApi} from '@ag-grid-enterprise/all-modules';
import {PagerService} from 'src/app/shared/services/pager.service';

@Component({
  selector: 'ag-grid-pagination',
  templateUrl: './ag-grid-pagination.component.html',
  styleUrls: ['./ag-grid-pagination.component.scss'],
  providers: [PagerService],
})
export class PaginationComponent implements OnChanges {
    @Input() pageSize: any = 0;
    public gridOptions: GridOptions = {};
    @Input() gridApi: GridApi;
    @Input() noOfPages: any = 0;
    public paginationPages: any= {};
    private BaseUrl = `${window.location.origin}/apps/purchases`;

    public paginationLeftArrowImg: string;;
    public paginationRightArrowImg: string;

    public paginationLeftArrowLbl: string;
    public paginationRightArrowLbl: string;

    get PaginationPages(): any {
      return this.paginationPages;
    }


    get currentPage(): number {
      return this.gridApi ? this.gridApi.paginationGetCurrentPage() : 0;
    }

    get totalPages(): number {
      return this.noOfPages;
    }

    constructor(private pagerService: PagerService) {
      this.paginationLeftArrowImg =`${this.BaseUrl}/assets/icon/arrow/left_arrow.svg`;
      this.paginationRightArrowImg = `${this.BaseUrl}/assets/icon/arrow/right_arrow.svg`;

      this.paginationLeftArrowLbl = 'left arrow';
      this.paginationRightArrowLbl = 'right arrow';
    }

    ngOnChanges(changes: SimpleChanges) {
      for (const propName in changes) {
        if (propName === 'noOfPages') {
          this.gridApi ? this.gridApi.paginationGoToPage(0) : 0;
          this.paginationPages = this.noOfPages ? this.pagerService.getPager(this.noOfPages, 1) : {};
        }
      }
    }

    goToPage(index: number): any {
      this.gridApi.paginationGoToPage(index);
    }

    goToNext(): any {
      this.paginationPages = this.pagerService.getNextPageSet(this.noOfPages,
          this.currentPage,
          this.paginationPages.startPage,
          this.paginationPages.endPage);
      this.gridApi ? this.gridApi.paginationGoToPage(this.paginationPages.currentPage) : 0;
    }

    goToPrevious(): any {
      this.paginationPages = this.pagerService.getPrevPageSet(this.noOfPages,
          this.currentPage,
          this.paginationPages.startPage,
          this.paginationPages.endPage);
      this.gridApi ? this.gridApi.paginationGoToPage(this.paginationPages.currentPage) : 0;
    }

    getFirstPage(index: number): any {
      this.paginationPages.currentPage = index;
      this.gridApi ? this.gridApi.paginationGoToPage(index) : 0;
      this.paginationPages = this.pagerService.getFirstPage(this.noOfPages,
          this.currentPage,
          this.paginationPages.startPage,
          this.paginationPages.endPage);
    }

    getLastPage(index: number): any {
      this.paginationPages.currentPage = index;
      this.gridApi ? this.gridApi.paginationGoToPage(index) : 0;
      this.paginationPages = this.pagerService.getLastPage(this.noOfPages,
          this.currentPage,
          this.paginationPages.startPage,
          this.paginationPages.endPage);
    }
}

