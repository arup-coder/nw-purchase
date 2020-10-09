
import { IVehicleAltLabels, } from 'src/app/shared/custom_types/custom.types';

export const VEHICLE_LABELS = {
  usa: {
    blankStateMaintitle: 'You have not made any purchases yet.',
    blankStateSubtitle: 'Search for vehicles and start bidding.',
    blankStateButtonText: 'Search Vehicles',
    loadingErrorMaintitle: 'There is problem loading this content',
    loadingErrorSubtitle: 'Please try reloading this page',
    drawerHeadTitles: {
      vehicleDetails: 'VEHICLE DETAILS',
      purchaseDetails: 'PURCHASE DETAILS',
      location: 'LOCATION',
      titleTracking: 'TITLE TRACKING',
      psiStatus: 'PSI/PDI STATUS',
      assuranceStatus: 'ASSURANCE STATUS',
      arbitrationStatus: 'ARBITRATION STATUS'
    },
    hiddenLocationText: 'Detailed location information \nwill be shown upon full payment'
  },
};

export const VEHICLE_ARIA_LABELS = {
  headerCheckbox: 'select all list items',
  tableCheckbox: 'select current list item',
};

export const VEHICLE_ALT_LABELS: IVehicleAltLabels = {
  vehicleDetails: 'vehicle details image',
  purchaseDetails: 'purchase details image',
  locationDetails: 'location details image',
  feesDetails: 'fees image',
  closeAllImg: 'close all vehicles image',
  expandAllImg: 'expand all vehicles image',
  titleTrackingImg: 'title tracking image',
  psiStatusImg: 'psi status icon',
  arbitrationImg: 'arbitration image',
  updateVehicleImg: 'update vehicle info image',
  blankStateCarImage: 'Car search image',
  updateVehicleClose: 'update vehicle close image',
  loadingErrorImage: 'loading error image',
  salesChannelLogo: 'sales channel image',
};

export const VEHICLE_UPDATE_LABELS = {
  heading: 'You have new unpaid vehicles.',
  contentSingle: '1 vehicle has been added to your account. Please refresh the page to view them.',
  contentMultiple: 'vehicles have been added to your account. Please refresh the page to view them.',
  acceptBtn: 'View new vehicles',
  rejectBtn: 'Ignore',
};

export const LOADING_ERRORS = {
  heading: 'There is a problem loading parts of this page',
  reloadBtn: 'Reload this Page',
  subTitle: 'Sorry, there is a technical problem that has prevented parts of this page from loading. Try reloading this page. If the issue persists, please try again at a later time.',
};


const BASE_URL = `${window.location.origin}/apps/purchases`;

export const IMAGE_PATH = {
  vehicleUpdateIcon: `${BASE_URL}/assets/icon/28px/info-icon.svg`,
  vehicleUpdateCloseIcon: `${BASE_URL}/assets/icon/12px/close.svg`,
  loadingErrorIcon: `${BASE_URL}/assets/icon/state-icons/Alert_Icon.svg`,
  dateRangePrevious: `${BASE_URL}/assets/icon/12px/date-range-prev.svg`,
  dateRangeNext: `${BASE_URL}/assets/icon/12px/date-range-next.svg`,
  titleTracking: `${BASE_URL}/assets/icon/24px/title-tracking.svg`,
  expandedTrue: `${BASE_URL}/assets/icon/24px/blue-up-crt.svg`,
  expandedFalse: `${BASE_URL}/assets/icon/24px/blue-down-crt.svg`,
  expandAll: `${BASE_URL}/assets/icon/24px/expand-all.svg`,
  collapseAll: `${BASE_URL}/assets/icon/24px/collapse-all.svg`,
  lineItemRow: `${BASE_URL}/assets/icon/24px/fees.svg`,
  vehicleInfoImg: `${BASE_URL}/assets/icon/24px/vehicle-info-details.svg`,
  purchaseDetailsImg: `${BASE_URL}/assets/icon/24px/purchase-details.svg`,
  locationImg: `${BASE_URL}/assets/icon/24px/location-details.svg`,
  arbitrationImg: `${BASE_URL}/assets/icon/24px/arbitration.svg`,
  traderevLogoImg: `${BASE_URL}/assets/icon/auction-channel/TRADEREV.svg`,
  adesaLogoImg: `${BASE_URL}/assets/icon/auction-channel/ADESA_Horz.svg`,
};
