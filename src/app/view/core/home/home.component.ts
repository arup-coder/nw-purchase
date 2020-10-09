import { ViewActions } from './../../../abstract-actions/view.actions';
import { IVehicle } from './../../../data-store/models/vehicle.model';
import { VehicleActions } from './../../../abstract-actions/vehicle-actions';
import { StoreService } from './../../../data-store/store';
import { Component, OnInit, AfterViewInit, OnDestroy, ChangeDetectorRef, HostListener, ViewContainerRef } from '@angular/core';
import Utils from 'src/app/shared/utils/utils';
import { AutoUnSubscribe, MarkFmp } from 'src/app/shared/decorators/custome.decorators';
import { IAlertConfig } from 'src/app/data-store/models/alert.model';
import { IFilterState, FilterState, IFilterStateKeys } from 'src/app/data-store/models/filter.model';
import { IChipsData } from '@nw/nw-component-library/src/app/chips/chips.model';
import { DomHandler } from '@nw/nw-component-library';
import { ViewPort, BreakPoints, Device, IFilterConfig, IErrorState, ExportType } from 'src/app/shared/custom_types/custom.types';
import { GLOBAL_SETTINGS } from 'src/app/shared/global-config';
import { IModuleState } from 'src/app/data-store/models/app-state.model';
import { IErrorEvent } from 'src/app/data-store/models/error-event.model';
import { ApiConstant, dateFilterRange } from 'src/app/shared/enums/enum';
import { CHIP_COMPONENT } from '../core.label';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'nw-purchases-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
@MarkFmp()
@AutoUnSubscribe()
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  public showLoader = true;
  private _showBlankState = false;
  public freeze = false;
  public recentPurchasedVehicleCount = 0;
  public alertConfig: IAlertConfig;
  private readonly filterKeys = Object.keys(new FilterState());
  public newChip: IChipsData[];
  public chipData: IChipsData[] = [];
  public filtersConfig: IFilterConfig[] = null;
  public newFilter: IFilterState = null;
  public currentModule: string;
  public currentDevice: string;
  public currentHomeComponentRef: ViewContainerRef;
  public showCardDetailsView: boolean;
  public exception: IErrorEvent;
  public isErrorState = false;
  public isErrorAlert = false;
  public errorStateConfig: IErrorState;
  public totalRangeVehicleCount = 0;
  public isBrowserIE = false;
  public readonly maxVehicleLimit = Number(GLOBAL_SETTINGS.ETR.pageSize);
  public readonly chipContainerHeading = CHIP_COMPONENT.usa.selectedFilter;


  constructor(
    private readonly storeService: StoreService,
    private readonly vehicleActions: VehicleActions,
    private readonly viewActions: ViewActions,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  get showBlankState() {
    return this._showBlankState;
  }

  set showBlankState(status: boolean) {
    this._showBlankState = status;
    if (!status && !this.isErrorState) {
      this.triggerAfterOnLoadSubscription();
      this.retainFilterState();
    }
  }
  ngOnInit() {
    if (!this.isDetectedBrowserIE()) {
      this.init();
    }
  }

  init() {
    this.vehicleActions.getVehicleCount();
    this.triggerOnLoadSubcriptions();
    this.initLazyLoadModule();
    Utils.accessibilityImprovement();
  }

  initLazyLoadModule() {
      const device: Device = Utils.detectDevice<BreakPoints, ViewPort>(
          GLOBAL_SETTINGS.breakPoints,
          DomHandler.getViewport(),
      );
      if (environment.featureFlags.mobileLayout) {
          this.currentDevice = device.currentDevice;
          this.viewActions.setCurrentModuleName(this.currentDevice);
      } else {
          this.currentDevice = device.currentDevice === 'mobile' ? 'tablet' : device.currentDevice;
          this.viewActions.setCurrentModuleName(this.currentDevice);
      }
  }

  ngAfterViewInit() {
  }

  /***
    All store subscriptions goes in triggerOnLoadSubcriptions and triggerAfterOnLoadSubscription
    NOTE: 1) Try to create disengaged subscriptions [One subscription for one individiual value]
          2) If  any subscription is needed after blank state check then add that in triggerAfterOnLoadSubscription
   ***/
  triggerOnLoadSubcriptions() {
    this.storeService.mapProps('vehicle', 'allRangevehicleCount')
      .subscribe((value: number) => {
        this.showBlankState = value === 0 ? true : false;
      });

    this.storeService.mapProps('vehicle', 'selectedRangeVehicleCount')
      .subscribe((value: number) => {
        this.totalRangeVehicleCount = value;
      });

    this.storeService.mapProps('vehicle', 'recentPurchasedVehicleCount')
      .subscribe((value: number) => {
        this.recentPurchasedVehicleCount = value;
      });

    this.storeService.mapProps('view', 'alertConfig')
      .subscribe((data: IAlertConfig) => {
        this.alertConfig = data;
      });

    this.storeService.mapProps('view', 'showLoader')
      .subscribe((data: boolean) => {
        this.showLoader = data;
      });

    this.storeService.mapProps('view', 'currentModule')
      .subscribe((data: IModuleState) => {
        if (data) {
          this.currentModule = data.moduleName;
          this.changeDetectorRef.detectChanges();
        }
      });

    this.storeService.mapProps('view', 'currentModule')
      .subscribe((data: IModuleState) => {
        if (data) {
          this.currentHomeComponentRef = data.homeRef;
        }
      });

    this.storeService.mapProps('view', 'exception')
      .subscribe((data: IErrorEvent) => {
        this.exception = data;

        if (this.exception && !Utils.isJsonObjectEmpty(this.exception)) {
          this.isErrorState = (
            this.exception.errorPayload.errorSource === ApiConstant.VEHICLECOUNT &&
            this.exception.errorState) ? true : false;

          this.isErrorAlert = (this.exception.errorPayload.errorSource !== ApiConstant.VEHICLECOUNT &&
            this.exception.errorState) ? true : false;

          if (this.isErrorState) {
            this.errorStateConfig = Utils.getErrorComponentConfig();
          }
        } else {
          this.isErrorState = false;
          this.isErrorAlert = false;
        }
        this.changeDetectorRef.detectChanges();
      });

    this.storeService.mapProps('view', 'showCardDetailsView')
      .subscribe((data: any) => {
        this.showCardDetailsView = data;
      });
  }

  triggerAfterOnLoadSubscription() {
    this.filterKeys.map((filterKey: IFilterStateKeys) => {
      this.storeService.mapProps('view', 'filter', filterKey)
        .subscribe((data: { pluckedKeys; val }) => {
          const pluckedKey: IFilterStateKeys = data.pluckedKeys[2] || null;
          const chip: IChipsData[] = Utils.getChips(data);
          this.newChip = chip;
          this.newFilter = Utils.prepareFilterData(pluckedKey, data.val);
          this.freeze = false;
          this.changeDetectorRef.detectChanges();
        });
    });

    this.storeService.mapProps('vehicle', 'vehicles')
      .subscribe((data: IVehicle[]) => {
        if (data && data.length > 0) {
          this.viewActions.setFiltersConfig(data);
        }
      });

    this.storeService.mapProps('view', 'filtersConfig')
      .subscribe((data: IFilterConfig[]) => {
        if (data && data.length > 0) {
          this.filtersConfig = data;
        }
      });
  }

  retainFilterState() {
    const filters: FilterState = Utils.getItemLocalStorage('filter') ? Utils.getItemLocalStorage('filter') : new FilterState();
    if (filters) {
      if (filters.saleDate && filters.saleDate.length === 0) {
        filters.saleDate = [dateFilterRange.lastThirtyDays];
      }
      this.viewActions.setFilterState(filters);
    }
  }

  onLazyloadModuleAdded(event: { homeRef: ViewContainerRef }) {
    this.viewActions.setCurrentModuleRef(event.homeRef);
  }

  ignoreNewVehicleUpdate() {
    this.vehicleActions.resetVehicleCount(0);
  }

  ignoreMaxVehicleLimit() {
    this.vehicleActions.resetSelectedRangeVehicleCount(0);
  }

  /***********************
    Only Add Output event handlers here after
  ************************/

  filterOutputEventHandler(data: IFilterState) {
    this.viewActions.setFilterState(data);
  }

  chipRemovedEventHandler(filter: IChipsData) {
    let currentFilterState = this.storeService.appState.view.filter[filter.id];
    if (Array.isArray(currentFilterState) && currentFilterState.length > 0) {
      currentFilterState = currentFilterState.filter((curValue) => {
        return (Utils.prepareChips(filter.id as IFilterStateKeys, curValue).label === filter.label) ? false : true;
      });
    } else if (typeof currentFilterState === 'string') {
      currentFilterState = '';
    }
    this.freeze = true;
    this.changeDetectorRef.detectChanges();

    this.viewActions.setFilterState({
      [filter.id]: currentFilterState,
    } as IFilterState);
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (!environment.featureFlags.mobileLayout) {
        return;
    }

    const device: Device = Utils.detectDevice<BreakPoints, ViewPort>(
      GLOBAL_SETTINGS.breakPoints,
      DomHandler.getViewport(),
    );
    if (device.currentDevice !== this.currentDevice) {
      this.destroyLazyLoadedModule();
      this.initLazyLoadModule();
      this.currentDevice = device.currentDevice;
    }
  }

  destroyLazyLoadedModule() {
    if (this.currentHomeComponentRef) {
      this.currentHomeComponentRef.clear();
    }
  }

  reloadVehicles() {
    this.vehicleActions.loadAllVehicle();
  }

  initExport(exportType: ExportType) {
    this.viewActions.setExportType(exportType);
  }

  isDetectedBrowserIE() {
    const isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
    this.isBrowserIE = isIEOrEdge;
    return isIEOrEdge;
  }

  ngOnDestroy() { }
}
