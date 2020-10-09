import { Injectable } from '@angular/core';
import { IFeesColumns } from 'src/app/data-store/models/vehicle.model';
import { VehicleDesktopModule } from '../vehicle.module';
import { Sort } from 'src/app/shared/custom_types/custom.types';

@Injectable({
  providedIn: VehicleDesktopModule,
})
export class VehicleConfigService {
  private _defaultSort: Sort = { sort: 'saleDate', dir: 'asc' };
  private _defaultPageSize = 25;

  private _vehicleSoldTableCellMetaData = {
    btnType1: {
      type: 'btn',
      style: {
        'border-color': '#1B909B',
        'background-color': 'transparent',
        'color': '#000000',
      },
      class: 'btn-hollow-aqua',
    },
    btnType2: {
      type: 'btn',
      style: {
        'border-color': '#FFBD00',
        'background-color': 'transparent',
        'color': '#000000',
      },
      class: 'btn-hollow-orange',
    },
    btnType3: {
      type: 'btn',
      style: {
        'border-color': '#01838F',
        'background-color': '#01838F',
        'color': '#ffffff',
      },
      class: 'btn-solid-blue',
    },
    btnType4: {
      type: 'btn',
      style: {
        'border-color': '#027BBD',
        'background-color': '#027BBD',
        'color': '#ffffff',
      },
      class: 'btn-solid-aqua',
    },
    btnType5: {
      type: 'btn',
      style: {
        'border-color': '#FFBD00',
        'background-color': '#FFBD00',
        'color': '#000000',
      },
      class: 'btn-solid-orange',
    },
    btnType6: {
      type: 'btn',
      style: {
        'border-color': '#D0021B',
        'background-color': '#D0021B',
        'color': '#ffffff',
      },
    },
    plainText1: {
      type: 'str',
      style: { 'color': '#000000', 'font-weight': 400 },
    },
    plainText2: {
      type: 'str',
      style: { 'color': '#000000', 'font-weight': 400, 'font-size': '12px', 'padding-top': '0.25em' },
    },
    plainText3: {
      type: 'str',
      style: { 'color': '#000000', 'min-width': '120px' },
    },
    plainText4: {
      type: 'str',
      style: { 'color': '#000000', 'min-width': '108px' },
    },
    organization: {
      type: 'str',
      style: { 'color': '#000000', 'min-width': '134px' },
    },
    date: {
      type: 'date',
      style: { 'width': '100px', 'min-width': '110px' },
    },
    currency: {
      type: 'currency',
      style: { 'color': '#000000', 'min-width': '100px', 'font-weight': '500' },
    },
    linkType1: {
      type: 'link',
      style: { 'color': '#000000', 'font-weight': 500 },
    },
    linkType2: {
      type: 'link',
      style: {
        'color': '#027ABB', 'font-weight': 500,
      },
    },
  };

  private _vehicleModelPK = 'nwVehicleId';
  private _vehicleModelID = 'vin';

  private _vehicleSoldTableFinanceSectionTableColumnMetaData: IFeesColumns[] = [
    {
      field: 'lineItemDescription',
      header: 'FEES',
      type: 'string',
    },
    {
      field: 'amount',
      header: 'COST',
      type: 'currency',
    },
    {
      field: 'taxes',
      header: 'TAX',
      type: 'array',
      childColumns: {
        field: 'amount',
        type: 'currency',
      },
    },
  ];

  private _checkboxSize = 6;

  private _expandableSize = 7;

  private expandAllImagePath = `/apps/purchases/assets/icon/16px/expand-all.png`;

  private collapseAllImagePath = `/apps/purchases/assets/icon/16px/close-all.png`;

  get DEFAULT_SORT() {
    return this._defaultSort;
  }

  get DEFAULT_PAGE_SIZE() {
    return this._defaultPageSize;
  }

  get vehicleSoldTableCellMetaData() {
    return this._vehicleSoldTableCellMetaData;
  }

  get vehicleModelPK() {
    return this._vehicleModelPK;
  }

  get vehicleModelID() {
    return this._vehicleModelID;
  }

  get checkboxSize() {
    return this._checkboxSize;
  }

  get expandableSize() {
    return this._expandableSize;
  }

  get vehicleSoldTableFinanceSectionTableColumnMetaData() {
    return this._vehicleSoldTableFinanceSectionTableColumnMetaData;
  }

  get expandAllTableRowImagePath() {
    return this.expandAllImagePath;
  }

  get collapseAllTableRowImage() {
    return this.collapseAllImagePath;
  }
}
