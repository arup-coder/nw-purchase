import {InjectionToken} from '@angular/core';

export type LAZY_MODULES = {
  desktop: string;
  tablet: string;
  mobile: string;
  unknown: string;
};

export const lazyMap: LAZY_MODULES = {
  desktop: 'src/app/view/vehicle-desktop/vehicle.module#VehicleDesktopModule',
  tablet: 'src/app/view/vehicle-desktop/vehicle.module#VehicleDesktopModule',
  mobile: 'src/app/view/vehicle-mobile/vehicle.module#VehicleMobileModule',
  unknown: 'src/app/view/vehicle-desktop/vehicle.module#VehicleDesktopModule',
};

export const LAZY_MODULES_MAP = new InjectionToken('LAZY_MODULES_MAP', {
  factory: () => lazyMap,
});
