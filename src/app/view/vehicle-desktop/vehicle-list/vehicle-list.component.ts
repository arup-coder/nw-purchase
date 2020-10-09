import { IFilterConfig, IEtrParams, ExportType } from './../../../shared/custom_types/custom.types';
import { VehicleActions } from './../../../abstract-actions/vehicle-actions';
import { DateRangeETR } from './../../../shared/custom_types/custom.types';
import { filterColumns, dateFilterRange, SalesChannel } from './../../../shared/enums/enum';
import { FilterState, IFilterStateKeys } from './../../../data-store/models/filter.model';
import {IVehicle} from './../../../data-store/models/vehicle.model';
import {VehicleConfigService} from './vehicle-config';
import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {VEHICLE_ALT_LABELS, VEHICLE_ARIA_LABELS, IMAGE_PATH, LOADING_ERRORS} from '../vehicle.labels';
import {IVehicleAriaLabels, IVehicleAltLabels, IErrorState} from 'src/app/shared/custom_types/custom.types';
import Utils from 'src/app/shared/utils/utils';
import {StoreService} from 'src/app/data-store/store';
import {IErrorEvent} from 'src/app/data-store/models/error-event.model';
import {ApiConstant} from 'src/app/shared/enums/enum';
import {ViewActions} from 'src/app/abstract-actions/view.actions';
import {Module, GridOptions, MasterDetailModule, PaginationChangedEvent} from '@ag-grid-enterprise/all-modules';
import {defaultGridOptions} from '../vehicle-desktop-grid.options';
import { ExportToCsv } from 'export-to-csv';
import { VehiclesExportMapper } from 'src/app/shared/class/vehicle-export-mapper';
import * as moment from 'moment';

const selectedAndFilters: any = {};
const selectedOrFilters: any = {};

const convertDate = (date) => {
  return Utils.formatTheDate(date);
};

@Component({
  selector: 'nw-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})

export class VehicleListComponent implements OnInit, OnChanges {
  @Input() public vehicleList: IVehicle[] = null;
  @Input() public showLoader: boolean;


  public readonly vehicleAltLabels: IVehicleAltLabels = VEHICLE_ALT_LABELS;
  public readonly vehicleAriaLabels: IVehicleAriaLabels = VEHICLE_ARIA_LABELS;

  public errorStateConfig: IErrorState;
  public gridData: IVehicle[] = null;
  public detailsData: any;
  public cardSelection: IVehicle[];
  public expandAllImgPath: string;
  public collapseAllImgPath: string;
  public exception: IErrorEvent;
  public isErrorState = false;
  public skeletonLoaderColumnPerRow: number;
  public pageSize: number ;
  public gridOptions: GridOptions = {};
  private readonly filterKeys = Object.keys(new FilterState());
  public modules: Module[] = [MasterDetailModule];
  private filtersConfig: IFilterConfig[];
  private vehicleApiDetails: Partial<IEtrParams> = null;
  public styling = {
    sortUnSort: '<i class="default-sort-icon"/>'
  };

  get paginationPageSize(): number {
    return this.pageSize;
  }

  constructor(
    private vehicleConfig: VehicleConfigService,
    private storeService: StoreService,
    private _viewActions: ViewActions,
    private vehicleActions: VehicleActions
  ) {
   this.pageSize = this.vehicleConfig.DEFAULT_PAGE_SIZE;
  }

  get viewActions() {
    return this._viewActions;
  }

  ngOnInit() {
    this.detailsData = {};
    this.triggerAllStoreSubcriptions();
    this.setGridConfigurations();
  }

  ngOnChanges(change: SimpleChanges) {
    if ('vehicleList' in change && typeof change.vehicleList.currentValue !== 'undefined') {
      this.vehicleList = change.vehicleList.currentValue;
      if (this.vehicleList && this.vehicleList.length > 0) {
        this.gridData = [...this.vehicleList];
        if (this.gridOptions && this.gridOptions.api &&
          isNullOrUndefined(this.gridOptions.api.setRowData(this.gridData))) {
          this.gridOptions.api.setRowData(this.gridData);
          this.triggerAfterOnLoadSubscription();
          this.addGtmClasses();
        }
      }
    } else {
      this.vehicleList = this.vehicleList;
    }
  }

  setGridConfigurations() {
    this.gridOptions = defaultGridOptions(this.gridOptions, this, this.pageSize);
    this.gridOptions.context = {
      componentParent: VehicleListComponent,
    };
  }

  triggerAllStoreSubcriptions() {
    this.storeService.mapProps('view', 'exception')
        .subscribe((data: IErrorEvent) => {
          this.exception = data;
          if (this.exception && !Utils.isJsonObjectEmpty(this.exception)) {
            this.isErrorState = (this.exception.errorPayload.errorSource !== ApiConstant.VEHICLECOUNT &&
            this.exception.errorState) ? true : false;
            if (this.isErrorState) {
              this.errorStateConfig = Utils.getErrorComponentConfig();
              this.viewActions.setAlertConfig(
                  Utils.getAlertConfigForLoadingError(
                      LOADING_ERRORS,
                      IMAGE_PATH,
                      VEHICLE_ALT_LABELS,
                  ));
            }
          } else {
            this.isErrorState = false;
          }
        });

    this.storeService.mapProps('view', 'vehicleApiDetails')
    .subscribe((data: Partial<IEtrParams>) => {
      this.vehicleApiDetails = data;
    });
  }

  // function used to set filters in ag grid
  setFilters(filter) {
    const keys = Object.keys(filter);
    keys.forEach(key => {
      const filterKey = key !== 'saleDate' && key !== 'vin' ? this.getKey(key, filter[key]) : key;
      const columnName = filterColumns[key];

      if (key === 'saleDate') {
        const dates = Utils.getDates();
        if ((filter[key][0] === dateFilterRange.lastThirtyDays || filter[key][0] === dateFilterRange.lastSevenDays ||
          filter[key][0] === dateFilterRange.today || filter[key][0] === dateFilterRange.yesterday ||
          filter[key][0] === dateFilterRange.lastNinetyDays) && ((selectedAndFilters[key] && selectedAndFilters[key][0] &&
          selectedAndFilters[key][0] !== filter[key][0]) || !selectedAndFilters[key]) && filter[key].length > 0) {
            const dateRange = dates[filter[key][0]];
            const dateFrom = convertDate(this.vehicleApiDetails['DateRange.From'].split('T')[0]);
            const dateTo = convertDate(this.vehicleApiDetails['DateRange.To'].split('T')[0]);
            selectedAndFilters[key] = filter[key];

            if (Utils.formatTheDate(dateRange[0]) < Utils.formatTheDate(dateFrom) ||
              Utils.formatTheDate(dateRange[1]) > Utils.formatTheDate(dateTo)) {
              const apiStartDate = filter[key][0] === dateFilterRange.lastNinetyDays ? dates[filter[key][0]][0] :
                dates[dateFilterRange.lastNinetyDays][0];
              const apiEndDate = filter[key][0] === dateFilterRange.lastNinetyDays ? dates[filter[key][0]][1] :
              dates[dateFilterRange.lastNinetyDays][1];
              this.vehicleActions.loadAllVehicle({
                dateFrom: apiStartDate,
                dateTo: apiEndDate
              });
            }
        } else if (filter[key] && filter[key][0] &&
            (!selectedAndFilters[key] || selectedAndFilters[key][0] !== filter[key][0]) && filter[key].length > 0 &&
          filter[key][0].split(' - ').length === 2) {
          selectedAndFilters[key] = filter[key];
          const dateFilterSplit = filter[key][0].split(' - ');
          const filterStartDate = dateFilterSplit[0];
          const filterEndDate = dateFilterSplit[1];
          const dateFrom = Utils.formatTheDate(this.vehicleApiDetails['DateRange.From'].split('T')[0]);
          const dateTo = Utils.formatTheDate(this.vehicleApiDetails['DateRange.To'].split('T')[0]);
          selectedAndFilters[key] = filter[key];
          if (moment(dateFrom).isAfter(filterStartDate, 'days') || moment(filterEndDate).isAfter(dateTo, 'days')) {
            this.vehicleActions.loadAllVehicle({
              dateFrom: filterStartDate,
              dateTo: filterEndDate
            });
          }
        }
      } else if (Utils.isFilterColumnNullable(columnName)) {
        selectedOrFilters[key] = filter[key];
      } else {
        selectedAndFilters[key] = filter[key];
      }
      if (filterKey && key !== 'saleDate' && key !== 'vin') {
        if (Array.isArray(filterKey) && Utils.isFilterColumnNullable(columnName)) {
          selectedOrFilters[key] = filterKey.flat();
        } else if (Array.isArray(filterKey) && !Utils.isFilterColumnNullable(columnName)) {
          selectedAndFilters[key] = filterKey.flat();
        } else if (Utils.isFilterColumnNullable(columnName)) {
            selectedOrFilters[key] = filterKey;
        } else {
          selectedAndFilters[key] = filterKey;
        }
      }
    });
    if (this.gridOptions && this.gridOptions.api) {
      this.gridOptions.api.onFilterChanged();
    }
    return;
  }

  triggerAfterOnLoadSubscription() {
    this.storeService.mapProps('view', 'filtersConfig')
    .subscribe((data: IFilterConfig[]) => {
      if (data && data.length > 0) {
        this.filtersConfig = data;
        this.triggerFilterService();
      }
    });
    this.storeService.mapProps('view', 'exportType')
    .subscribe((data: ExportType) => {
      if (data ) {
        this.exportToCsv(data);
      }
    });
  }

  triggerFilterService() {
    this.filterKeys.map((filterKey: IFilterStateKeys) => {
      this.storeService.mapProps('view', 'filter', filterKey)
        .subscribe((data: { pluckedKeys; val }) => {
          const pluckedKey: IFilterStateKeys = data.pluckedKeys[2] || null;
          this.setFilters(Utils.prepareFilterData(pluckedKey, data.val));
        });
    });
  }

  // method will return true if we have any filter selected
  isFilterPresent(): boolean {
    const keys = Object.keys(selectedAndFilters);
    let isFilterPresent = false;

    keys.forEach(key => {
      if (selectedAndFilters[key] && selectedAndFilters[key].length > 0) {
        isFilterPresent = true;
      }
    });

    return isFilterPresent;
  }

  // this method will filter out data
  filterData = (node) => {
    let keys = Object.keys(selectedAndFilters);
    const results: boolean[] = [];
    keys.forEach(key => {
      let value = selectedAndFilters[key];
      const columnName = filterColumns[key];

      if (!isNullOrUndefined(columnName) && value.length > 0) {
        const columnValue = Utils.getData(node.data, columnName);
        if (typeof value === 'string') {
          results.push(columnValue.toLowerCase().includes(value.toLowerCase()));
        } else if (key === 'saleDate') {
          const dateFilter = selectedAndFilters[key][0];
          const dateFilterSplit = dateFilter.split(' - ');
          if (dateFilter === dateFilterRange.customDateRange || dateFilter === dateFilterRange.lastSevenDays ||
            dateFilter === dateFilterRange.lastThirtyDays || dateFilter === dateFilterRange.today ||
            dateFilter === dateFilterRange.yesterday || dateFilter === dateFilterRange.lastNinetyDays) {
              const dates = Utils.getDates();
              const selection = dates[dateFilter] ? dates[dateFilter] : null;
              if (selection && selection.length === 1) {
                const startDate = convertDate(selection[0]);
                results.push(columnValue === startDate);
              } else if (selection && selection.length === 2) {
                const startDate = convertDate(selection[0]);
                const endDate = convertDate(selection[1]);
                results.push(columnValue >= startDate && columnValue <= endDate);
              } else {
                results.push(true);
              }
          } else if (selectedAndFilters[key].length > 0 && dateFilterSplit &&
              dateFilterSplit.length === 2) {
            const startDate = convertDate(dateFilterSplit[0]);
            const endDate = convertDate(dateFilterSplit[1]);
            results.push(columnValue >= startDate && columnValue <= endDate);
          }
        } else if (columnValue && columnValue !== '') {
          if (selectedAndFilters[key][0] === 'All') {
            results.push(true);
          } else {
            results.push(selectedAndFilters[key].indexOf(columnValue) !== -1);
          }
        } else {
          results.push(false);
        }
      }
    });

    keys = Object.keys(selectedOrFilters);
    let valueExist = true;
    keys.forEach(key => {
      valueExist = selectedOrFilters[key].length > 0 ? false : valueExist;
    });

    keys.forEach(key => {
      const value = selectedOrFilters[key];
      const columnName = filterColumns[key];
      const columnValue = !isNullOrUndefined(columnName) ? Utils.getData(node.data, columnName) : '';

      if (!isNullOrUndefined(columnName) && value.length > 0 && columnValue !== '') {

        if (typeof value === 'string' && columnValue.toLowerCase().includes(value.toLowerCase())) {
          valueExist = true;
        } else {
            if (selectedOrFilters[key][0] === 'All') {
              valueExist = true;
            } else if (selectedOrFilters[key].indexOf(columnValue) !== -1) {
              valueExist = true;
            }
        }
      }
    });
    results.push(valueExist);
    if (results.length > 0) {
      // Close all expanded drawer on filter success.
      this.viewActions.setCollapseOnPageFilter(false);

      return results.indexOf(false) === -1;
    } else {
      return false;
    }
  }

  pageSelectionOutputEventHandler(value: any) {
    this.pageSize = value;
    // Close all expanded drawer on change page size.
    this.viewActions.setCollapseOnPageFilter(false);
    this.setGridConfigurations();
  }
  getRowHeight(params) {
    if (params.node && params.node.detail) {

      let totalHeight = 0;
      let defaultSeparator = 2;
      let lineItemRow = 0;

      const topPadandMargin = 20;
      const basicDetails = 102;
      const runAndLane = 18;
      const separatorHeight = 40;
      const lineItemSHead = 32;
      const oneLineItemwithOneTax = 33;
      const oneTaxExtraHead = 24;
      const titleTrackingRow = 69;
      const assuranceRow = 58;


      // Add top padding and basic drawer height
      totalHeight = totalHeight + topPadandMargin + basicDetails;

      // Run and lane number
      if (
        (params.data.lbRunNumber || params.data.lbLaneNumber)
        &&  params.data.auctionChannelValue
        && params.data.auctionChannelValue == SalesChannel.SIMULCAST) {
          totalHeight = totalHeight + runAndLane;
      }

      // LineItem height calculation
      if (Array.isArray(params.data.purchases.lineItems)) {
        params.data.purchases.lineItems.map((lineItem) => {
          if (Array.isArray(lineItem.taxes) && lineItem.taxes.length > 1 ) {
            lineItemRow = lineItemRow + oneLineItemwithOneTax + ((lineItem.taxes.length - 1 ) * oneTaxExtraHead);
          } else {
            lineItemRow = lineItemRow + oneLineItemwithOneTax;
          }
        });
      }

      // Add lineItem height in totalHeight
      totalHeight = totalHeight + lineItemRow + lineItemSHead;

      // Add height for PSI and titleTracking
      totalHeight = totalHeight + titleTrackingRow;

      // Add height for Assurance or Arbitration height
      if (params.data.adesaAssuranceStatus || params.data.arbitration.status) {
        totalHeight = totalHeight + assuranceRow;
        defaultSeparator++;
      }

      // Add separatorHeight
      totalHeight = totalHeight + separatorHeight * defaultSeparator;
      return (totalHeight + 30); // add buffer
    }
  }

  onPaginationChanged(paginationData: PaginationChangedEvent) {
    if (paginationData.type === 'paginationChanged' && paginationData.newPage === true ) {
      this.viewActions.setCollapseOnPageFilter(false);
      this.addGtmClasses();
    }
  }

  parentCallBack = (type?: string, data?: boolean) => {
    switch (type) {
      case 'setExpandAllForRows':
        this.viewActions.setExpandAllForRows(data);
        break;
      case 'setCollapseOnPageFilter':
        this.viewActions.setCollapseOnPageFilter(data);
        break;
      case 'setExpandForSingleRow':
        this.viewActions.setExpandForSingleRow(data);
        break;
    }
  }

  loadNewVehicles(dateRange: DateRangeETR) {
    this.vehicleActions.loadAllVehicle(dateRange);
  }

  getKey = (type: string, titles: string[]) => {
    const filterIndex = this.filtersConfig.map((instance) => instance.id).indexOf(type);
    if (filterIndex !== -1) {
      const keys =
        this.filtersConfig[filterIndex].options.filter(element => titles.indexOf(element.title) !== -1)
        .map(filter =>  filter.value ? filter.value : filter.valueArray);
       
      return keys;
    } else {
      return null;
    }
  }

  exportToCsv(exportType?: ExportType) {

    const dataToExport: VehiclesExportMapper[] = [];

    // Map all the selected rows to export
    this.gridOptions.api.forEachNodeAfterFilterAndSort((curROw) => {
      dataToExport.push(new VehiclesExportMapper(curROw.data));
    });
    if (dataToExport.length > 0 ) {
      setTimeout(() => {
        const csvExporter = new ExportToCsv(VehiclesExportMapper.options);
        csvExporter.generateCsv(dataToExport);
    }, 0);
    }

    this.viewActions.setExportType(null);

  }

  addGtmClasses() {
    const checkboxes: HTMLCollectionOf<Element> = document.getElementsByClassName('ag-checkbox-input');
    [].forEach.call(checkboxes, (checkbox) => {
      checkbox.classList.add('purchases-btn-grid-checkbox');
    });
  }
}
