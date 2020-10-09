import { FILTER_SETTINGS } from './../global-config';
import { IFilterConfig } from './../custom_types/custom.types';
import { dateFilterRange } from './../enums/enum';
import { IVehicle } from './../../data-store/models/vehicle.model';
import { isNullOrUndefined } from 'util';
import { IFilterStateKeys, IFilterState } from 'src/app/data-store/models/filter.model';
import { IChipsData } from '@nw/nw-component-library/src/app/chips/chips.model';
import { IVehicleUpdateLabels, IVehicleAltLabels, IImagePath, ILoadingErrorLabels, DateRangeETR } from '../custom_types/custom.types';
import { IMAGE_PATH, VEHICLE_ALT_LABELS, VEHICLE_LABELS } from 'src/app/view/vehicle-desktop/vehicle.labels';
import * as moment from 'moment';
import { GLOBAL_SETTINGS } from '../global-config';

export default class Utils {
  public static accessibilityImprovement() {
    document.body.addEventListener('keyup', function (e) {
      if (e.which === 9) {
        const elements: HTMLCollectionOf<Element> = document.getElementsByClassName('no-focus-outline');
        [].forEach.call(elements, (elem) => {
          elem.classList.remove('no-focus-outline');
        });
      }
    });

    document.body.addEventListener('click', function (e) {
      document.documentElement.classList.add('no-focus-outline');
    });
  }

  public static searchString(srcStr: string, searchStr: string[]): boolean {
    return (searchStr
      .map((url) => srcStr.indexOf(url))
      .filter((index) => (index > 0)).length > 0) ? true : false;
  }

  public static getAlertConfigForNewVehicles(vehicleCount: number, labels: IVehicleUpdateLabels, imgsrc: IImagePath, altLabels: IVehicleAltLabels): any {
    const content = (vehicleCount === 1) ? labels.contentSingle : `${vehicleCount} ${labels.contentMultiple}`;

    const updateVehicleConfig = {
      type: 'info',
      heading: {
        label: labels.heading,
        id: 'vehicle-update_heading',
      },
      content: {
        label: content,
        id: 'vehicle-content',
      },
      acceptBtn: {
        label: labels.acceptBtn,
        id: 'vehicle-update_view-new-vehicles_btn',
        class: 'purchases-btn-view-new-vehicles',
        type: 'solid',
      },
      rejectBtn: {
        label: labels.rejectBtn,
        id: 'vehicle-update_view-new-vehicles_btn',
        class: 'purchases-btn-ignore-new-vehicles',
        type: 'hollow',
      },
      contentIcon: {
        path: imgsrc.vehicleUpdateIcon,
        alt: altLabels.updateVehicleImg,
      },
      closeIcon: {
        path: imgsrc.vehicleUpdateCloseIcon,
        alt: altLabels.updateVehicleClose,
        wrapperClass: 'purchases-btn-update-vehicle-close-icon',
      },
      reloadBtn: null,
    };

    return updateVehicleConfig;
  }

  public static getAlertConfigMaxVehicleLimit(
    imgsrc: IImagePath,
    altLabels: IVehicleAltLabels):
    any {

     const heading = `Only the first ${Utils.formatNumberToCommaSeparated(GLOBAL_SETTINGS.ETR.pageSize)} results will be shown`;
     const contentSingle = `Your search has generated more than ${Utils.formatNumberToCommaSeparated(GLOBAL_SETTINGS.ETR.pageSize)} results. To see fewer, please try using a smaller or custom date range.`;
    

    const updateVehicleConfig = {
      type: 'info',
      heading: {
        label: heading,
        id: 'vehicle-update_heading',
      },
      content: {
        label: contentSingle,
        id: 'vehicle-content',
      },
      contentIcon: {
        path: imgsrc.vehicleUpdateIcon,
        alt: altLabels.updateVehicleImg,
      },
      closeIcon: {
        path: imgsrc.vehicleUpdateCloseIcon,
        alt: altLabels.updateVehicleClose,
        wrapperClass: 'purchases-btn-update-vehicle-close-icon',
      },
      reloadBtn: null,
    };

    return updateVehicleConfig;
  }


  public static capitalize = (str: string): string => {
    const result = str.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  public static setItemLocalStorage = (key: string, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public static getItemLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key));
  }

  public static setItemSessionStorage = (key: string, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  public static getItemSessionStorage = (key: string) => {
    return JSON.parse(sessionStorage.getItem(key));
  }

  public static getChips(data) {
    const chip: IChipsData[] = [];
    const pluckedKey: IFilterStateKeys = data.pluckedKeys[2] || null;
    // Create and add new chip to the chip component
    if (Array.isArray(data.val)) {
      if (data.val.length > 0) {
        data.val.map((filterValue) => {
          chip.push(Utils.prepareChips(pluckedKey, filterValue));
        });
      } else {
        chip.push(Utils.prepareChips(pluckedKey, null));
      }
    } else {
      chip.push(Utils.prepareChips(pluckedKey, data.val));
      // this.changeDetectorRef.detectChanges();
    }
    return chip;
  }

  public static prepareChips = (filterKey: IFilterStateKeys, filterData: string[] | string): IChipsData => {
    let label: string = null;
    const disable = false;
    let htmlId: string = null;

    /** ******** if for string[]|number[] else for string|number ***********/

    if (typeof filterData === 'string' && (filterData as string).trim().length > 0) {
      label = `${Utils.capitalize(filterKey)}: ${filterData}`;
      htmlId = `chip_${filterKey}_${Utils.removeSpaces(filterData)}`;
    }

    return {
      id: filterKey,
      label,
      disable,
      htmlId
    } as IChipsData;
  }

  public static prepareFilterData = (pluckedKeys: IFilterStateKeys, filterData): IFilterState => {
    const blankObj = {} as IFilterState;
    blankObj[pluckedKeys] = filterData;
    return blankObj;
  }

  public static getData(row: any, key: string) {
    if (key.indexOf('.') !== -1) {
      const firstKey = key.split('.')[0];
      const secondKey = key.split('.')[1];
      return (isNullOrUndefined(row[firstKey])) ? '' : row[firstKey][secondKey];
    } else {
      return row[key];
    }
  }

  public static detectDevice<T1, T2>(breakPoints: T1, currentViewPort: T2) {
    if (currentViewPort['width'] > breakPoints['mxl']) {
      return { currentDevice: 'desktop' };
    } else
      /* istanbul ignore else */
      if (currentViewPort['width'] >= breakPoints['md'] && currentViewPort['width'] <= breakPoints['mxl']) {
        return { currentDevice: 'tablet' };
      } else if (currentViewPort['width'] < breakPoints['md']) {
        return { currentDevice: 'mobile' };
      }
  }

  /* This function to make error payload that includes error source and error message*/
  public static makeErrorPayload(errSoruce: string, errDescription: string) {
    const errDescrption = {
      component: '',
      errorSource: errSoruce,
      errorDescription: errDescription,
    };

    const error = {
      errorPayload: errDescrption,
      errorState: true,
    };
    return error;
  }

  /* Get Alert Config for HttpResponse error*/
  public static getAlertConfigForLoadingError(labels: ILoadingErrorLabels,
    imgsrc: IImagePath,
    altLabels: IVehicleAltLabels): any {
    const loadingErrorConfig = {
      type: 'error',
      heading: {
        label: labels.heading,
        id: 'loading_error_heading',
      },
      content: {
        label: labels.subTitle,
        id: 'loading-error-content',
      },
      reloadBtn: {
        label: labels.reloadBtn,
        id: 'loading_error_reload_btn',
        class: 'purchases-btn-loading-error-vehicles',
        type: 'reload',
      },
      contentIcon: {
        path: imgsrc.loadingErrorIcon,
        alt: altLabels.loadingErrorImage,
      },
      closeIcon: {
        path: imgsrc.vehicleUpdateCloseIcon,
        alt: altLabels.updateVehicleClose,
        wrapperClass: 'purchases-btn-update-vehicle-close-icon',
      },
      acceptBtn: null,
      rejectBtn: null,
    };
    return loadingErrorConfig;
  }

  /* Get error component Config for HttpResponse error*/
  public static getErrorComponentConfig(): any {
    const errorConfig = {
      loadingErrorIcon: IMAGE_PATH.loadingErrorIcon,
      loadingErrorIconAltText: VEHICLE_ALT_LABELS.loadingErrorImage,
      loadingErrorMaintitle: VEHICLE_LABELS.usa.loadingErrorMaintitle,
      loadingErrorSubtitle: VEHICLE_LABELS.usa.loadingErrorSubtitle,
    };
    return errorConfig;
  }

  public static isJsonObjectEmpty(obj) {
    for (const prop in obj) {
      /* istanbul ignore else */
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }

  public static convertDateToDateObject(date) {
    const month = date.split('/')[0];
    const day = date.split('/')[1];
    const year = date.split('/')[2];
    return new Date(`${year}-${month}-${day}`);
  }


  public static formatTheDate(value: string | number | Date) {
    if (value == null) {
      return '';
    }
    return moment(value).format('MM/DD/YY') === 'Invalid date' ? '' : moment(value).format('MM/DD/YY');
  }

  public static formatNumber(value: any) {
    if (isNullOrUndefined(value)) {
      return '';
    }
    return `$${(value).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
  }

  public static monthToComparableNumber(date: any) {
    if (date === undefined || date === null || date.length !== 8) {
      return null;
    }
    const yearNumber = date.substring(6, 10);
    const dayNumber = date.substring(3, 5);
    const monthNumber = date.substring(0, 2);

    const result = yearNumber * 10000 + monthNumber * 100 + dayNumber;
    return result;
  }

  public static getSaleDateCount(data: IVehicle, title: string, currentCount: number, key: string, minDate: string, maxDate: string) {
    const dates = this.getDates();
    const dateSelected = dates[title] ? [this.formatTheDate(dates[title][0]), this.formatTheDate(dates[title][1])] : null;
    if (dates && dateSelected && dateSelected[0] === dateSelected[1] && minDate <= dateSelected[0]
      && maxDate >= dateSelected[0] && data[key] === dateSelected[0]) {
      if (isNullOrUndefined(currentCount)) {
        currentCount = 0;
      }
      return currentCount + 1;
    } else if (dates && dateSelected && dateSelected[0] !== dateSelected[1] && data[key] >= dateSelected[0] &&
        minDate <= dateSelected[0] && maxDate >= dateSelected[1] && data[key] <= dateSelected[1]) {
      if (isNullOrUndefined(currentCount)) {
        currentCount = 0;
      }
      return currentCount + 1;
    } else {
      return currentCount;
    }
  }

  public static getDates() {
    const dates = {};
    dates[dateFilterRange.today] = [moment(), moment()];
    dates[dateFilterRange.yesterday] = [moment().subtract(1, 'days'), moment().subtract(1, 'days')];
    dates[dateFilterRange.lastSevenDays] = [moment().subtract(6, 'days'), moment()];
    dates[dateFilterRange.lastThirtyDays] = [moment().subtract(29, 'days'), moment()];
    dates[dateFilterRange.lastNinetyDays] = [moment().subtract(89, 'days'), moment()];
    return dates;
  }

  public static getMaxETRDateRange():DateRangeETR{
    const dtTo = moment().toISOString();
    const dtFrom = moment(dtTo).subtract(18, 'M').toISOString();
    return {
      dateFrom: dtFrom,
      dateTo: dtTo
    }
  }

  public static formatNumberToCommaSeparated(value: any) {
    if (isNullOrUndefined(value)) {
      return '';
    }
    return `${(value).replace(/(\d)(?=(\d{3})+(?!\d))/g, '1,')}`;
  }

  static removeSpaces(value: string): string {
    return value.replace(/\s/g, '');
  }

  public static isFilterColumnNullable(columnName) {
    const filtersConfig: IFilterConfig[] = JSON.parse(JSON.stringify([...FILTER_SETTINGS]));
    const index = filtersConfig.map((instance) => instance.name).indexOf(columnName);
    const canFilterWithOR = index !== -1 && !isNullOrUndefined(filtersConfig[index].canFilterWithOR) ?
      filtersConfig[index].canFilterWithOR : false;
    return canFilterWithOR;
  }
}
