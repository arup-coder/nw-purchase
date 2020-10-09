import {VehicleUpdateLabels, VehicleAltLabels, ImagePath, LoadingErrorLabels, VehicleLabels, VehicleMaxLimitLabels} from './../../mock/mock-data';
import {TestBed} from '@angular/core/testing';
import Utils from './utils';
import {BreakPoints, ViewPort, DateRangeETR} from '../custom_types/custom.types';
import {GLOBAL_SETTINGS} from '../global-config';
import {DomHandler} from '@nw/nw-component-library';
import * as moment from 'moment';

describe('Utils', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
      ],
      declarations: [],
    }).compileComponents();
  });

  beforeEach(() => {
  });

  it('searchString', () => {
    let searchString = ['test', 'string'];
    const fullString = 'test string';
    expect(Utils.searchString(fullString, searchString)).toBeTruthy();

    searchString = ['test'];
    expect(Utils.searchString(fullString, searchString)).toBeFalsy();
  });

  it('getAlertConfigForNewVehicles', () => {
    const labels = VehicleUpdateLabels;
    const vehicleCount = 1;
    const imgsrc = ImagePath;
    const altLabels = VehicleAltLabels;
    const content = (vehicleCount === 1) ? labels.contentSingle : `${vehicleCount} ${labels.contentMultiple}`;

    const result = {
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

    const method = Utils.getAlertConfigForNewVehicles(vehicleCount, labels, imgsrc, altLabels);

    expect(JSON.stringify(method)).toEqual(JSON.stringify(result));
  });


  it('getAlertConfigForLoadingError', () => {
    const labels = LoadingErrorLabels;
    const imgsrc = ImagePath;
    const altLabels = VehicleAltLabels;

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

    const method = Utils.getAlertConfigForLoadingError( labels,
        imgsrc,
        altLabels);

    expect(JSON.stringify(method)).toEqual(JSON.stringify(loadingErrorConfig));
  });

  it('getErrorComponentConfig', () => {
    const labels = VehicleLabels;
    const imgsrc = ImagePath;
    const altLabels = VehicleAltLabels;

    const errorConfig = {
      loadingErrorIcon: imgsrc.loadingErrorIcon,
      loadingErrorIconAltText: altLabels.loadingErrorImage,
      loadingErrorMaintitle: labels.usa.loadingErrorMaintitle,
      loadingErrorSubtitle: labels.usa.loadingErrorSubtitle,
    };

    const method = Utils.getErrorComponentConfig();

    expect(JSON.stringify(method)).toEqual(JSON.stringify(errorConfig));
  });


  it('isJsonObjectEmpty', () => {
    const obj = {};
    const method = Utils.isJsonObjectEmpty(obj);
    expect(method).toEqual(true);
  });

  it('makeErrorPayload', () => {
    const errSoruce = '';
    const errDescription = '';

    const errDescrption = {
      component: '',
      errorSource: errSoruce,
      errorDescription: errDescription,
    };

    const error = {
      errorPayload: errDescrption,
      errorState: true,
    };

    const method = Utils.makeErrorPayload(errSoruce, errDescription);
    expect(JSON.stringify(method)).toEqual(JSON.stringify(error));
  });

  it('Detect Device', () => {
    const method = Utils.detectDevice<BreakPoints, ViewPort>(
        GLOBAL_SETTINGS.breakPoints,
        DomHandler.getViewport(),
    );
    expect(method).not.toEqual(undefined);
  });

  it('capitalize', () => {
    const str = 'test';
    const method = Utils.capitalize(str);
    expect(method).not.toEqual('TEST');
  });

  it('monthToComparableNumber', () => {
    const date: any ='07042020';
    const method = Utils.monthToComparableNumber(date);
    expect(method).toEqual('20070042');
  });


  it('formatNumber', () => {
    const value =12347;
    const method = Utils.formatNumber(value);
    expect(method).toEqual('$12,347.00');
  });

  it('formatTheDate', () => {
    const date: any ='2020-01-29T15:50:23.091';
    const method = Utils.formatTheDate(date);
    expect(method).toEqual('01/29/20');
  });

  it('getAlertConfigForNewVehicles', () => {
    const labels = VehicleUpdateLabels;
    const vehicleCount = 2;
    const imgsrc = ImagePath;
    const altLabels = VehicleAltLabels;
    const result = Utils.getAlertConfigForNewVehicles(vehicleCount, labels, imgsrc, altLabels);
    expect(result.content.label).
        toEqual('2 vehicles have been added to your account. Please refresh the page to view them.');
  });

  it('getAlertConfigMaxVehicleLimit', () => {
    const labels = VehicleMaxLimitLabels;
    const imgsrc = ImagePath;
    const altLabels = VehicleAltLabels;
    const result = {
      type: 'info',
      heading: {
        label: labels.heading,
        id: 'vehicle-update_heading',
      },
      content: {
        label:labels.contentSingle,
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

    const method = Utils.getAlertConfigMaxVehicleLimit(imgsrc, altLabels);

    expect(JSON.stringify(method)).toEqual(JSON.stringify(result));
  });

  it('getMaxETRDateRange', () => {

    const method = Utils.getMaxETRDateRange();
    let fromMonth = Number(moment(method.dateFrom).format('MM')) + Number(moment(method.dateFrom).format('YYYY')) *12;
    let toMonth = Number(moment(method.dateTo).format('MM')) + Number(moment(method.dateTo).format('YYYY')) *12;
    expect(toMonth-fromMonth).toEqual(18);
  });
  
  it('formatNumberToCommaSeparated', () => {
    const value =`1000`;
    const method = Utils.formatNumberToCommaSeparated(value);
    expect(method).toEqual('1,000');
  });


  
});

