import {IVehicle} from 'src/app/data-store/models/vehicle.model';
import * as formatter from './ag-grid-formatter';
import {GridOptions} from '@ag-grid-enterprise/all-modules';
import { VehicleDetailsComponent } from './vehicle-list/vehicle-details/vehicle-details.component';
import { CellLinkRenderer } from './ag-grid-cell-renderer/cell-link-renderer/cell-link-renderer';
import { CellTreeTogglerRenderer } from './ag-grid-cell-renderer/cell-link-renderer/cell-tree-toggler-renderer';
import { CellTreeTogglerAllRenderer } from './ag-grid-cell-renderer/cell-link-renderer/cell-tree-toggler-all-renderer';
import { CellSalesChannelRenderer } from './ag-grid-cell-renderer/cell-link-renderer/cell-sales-channel-renderer';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { CellPaymentStatuslRenderer } from './ag-grid-cell-renderer/cell-payment-status-rendrer/cell-payment-status-rendrer';
import { CellAssuranceVinRenderer } from './ag-grid-cell-renderer/cell-link-renderer/cell-assurance-vin-renderer';

export const defaultGridOptions = (gridOptions: GridOptions, componentParent: VehicleListComponent, pageSize: number): GridOptions => {

  return {
    ...gridOptions,
    getRowNodeId: (data: IVehicle) => `${data.nwVehicleId}_row`,
    pagination: true,
    paginationPageSize: pageSize,
    deltaRowDataMode: true,
    suppressScrollOnNewData: true,
    suppressPaginationPanel: true,
    suppressNoRowsOverlay: true,
    suppressLoadingOverlay: true,
    domLayout: 'autoHeight',
    suppressMenuHide: true,
    rowSelection: 'multiple',
    suppressRowClickSelection: true,
    headerHeight: 61,
    masterDetail: true,
    detailCellRenderer: 'gridDetailDrawer',
    frameworkComponents: {
      gridDetailDrawer: VehicleDetailsComponent,
      linkRenderer: CellLinkRenderer,
      treeToggler: CellTreeTogglerRenderer,
      treeTogglerAll: CellTreeTogglerAllRenderer,
      salesChannelRenderer: CellSalesChannelRenderer,
      paymentStatusRenderer: CellPaymentStatuslRenderer,
      assuranceVinRenderer: CellAssuranceVinRenderer
    },
    rowHeight: 72,
    defaultColDef: {
      sortable: true,
      filter: false,
      sortingOrder: ['asc', 'desc'],
      cellClass: 'cell-wrap-text',
      headerCheckboxSelection: formatter.isFirstColumn,
      checkboxSelection: formatter.isFirstColumn,
      headerClass: formatter.headerClass,
      flex: 1,
      unSortIcon: true
    },
    onFirstDataRendered: (event) => {
      let headers: HTMLCollectionOf<Element> = document.getElementsByClassName('ag-header-cell-label');
      [].forEach.call(headers, (header) => {
        header.classList.add('purchases-btn-sort');
      });
      headers = document.getElementsByClassName('ag-header-cell-text');
      [].forEach.call(headers, (header) => {
        header.classList.add('purchases-btn-sort');
      });
      const checkboxes: HTMLCollectionOf<Element> = document.getElementsByClassName('ag-checkbox-input');
      [].forEach.call(checkboxes, (checkbox) => {
        checkbox.classList.add('purchases-btn-grid-checkbox');
      });
    },
    columnDefs: [
      {
        colId: 'vehicle',
        headerName: 'Vehicle',
        field: 'vehicleTitle',
        flex: 3.5,
        cellRenderer: 'linkRenderer', cellRendererParams: 'link',
        cellClass: ['ag-grid-title-cell', 'cell-wrap-text'],
      },
      {
        colId: 'vin-trimmed',
        headerName: 'VIN',
        field: 'vinTrimmed',
        flex: 1.5,
        cellRenderer: 'assuranceVinRenderer',
      },
      {
        colId: 'price',
        headerName: 'Total \nPrice',
        field: 'purchases.amount',
        flex: 1.5,
        cellRenderer: formatter.currencyFormatter,
        cellClass: 'ag-grid-amount-cell',
      },
      {
        colId: 'sale-date',
        headerName: 'Sale \nDate',
        field: 'soldDateMMDDYY',
        sort: 'desc',
        comparator: formatter.dateComparator,
        flex: 1.5,
      },
      {
        colId: 'auction-channel',
        headerName: 'Auction \nChannel',
        flex: 1.5,
        cellRenderer: 'salesChannelRenderer', cellRendererParams: 'auctionChannelValue',
        cellClass: 'sales-channel-logo',
        field: 'auctionChannelValue',
        comparator: formatter.salesChannelComparator,
      },
      {
        colId: 'title-status',
        headerName: 'Title \nStatus',
        field: 'titleStatus.status',
        flex: 1.5,
        cellRenderer: formatter.titleStatusFormatter,
        cellClass: ['cell-wrap-overflow', 'cell-wrap-text'],
      },
      {
        colId: 'payment-status',
        headerName: 'Payment \nStatus',
        cellRenderer: 'paymentStatusRenderer', cellRendererParams: 'paymentStatus',
        field: 'paymentStatus',
        flex: 1.8,
        cellClass: ['cell-wrap-overflow', 'cell-wrap-text'],
      },
      {
        colId: 'expand-all-btn',
        headerName: 'expand all',
        headerClass: 'expand-all-btn',
        flex: 1,
        showRowGroup: true,
        headerComponent: 'treeTogglerAll',
        headerComponentParams: {
          parentCallBack: componentParent.parentCallBack
        },
        cellRenderer: 'treeToggler',
        cellRendererParams: {
          parentCallBack: componentParent.parentCallBack
        },
        cellClass: 'tree-toggler',
      },
    ],
    rowData: [],
  };
};
