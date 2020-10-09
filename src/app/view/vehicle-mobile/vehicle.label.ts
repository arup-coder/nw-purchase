export const VEHICLE_LABELS = {
  usa: {

    blankStateMaintitle: 'You have not made any purchases yet.',
    blankStateSubtitle: 'Search for vehicles and start bidding.',
    blankStateButtonText: 'Search Vehicles',
    loadingErrorMaintitle: 'There is problem loading this content',
    loadingErrorSubtitle: 'Please try reloading this page',
  },
};

export const VEHICLE_ARIA_LABELS = {
  headerCheckbox: 'select all list items',
  tableCheckbox: 'select current list item',
};

export const VEHICLE_ALT_LABELS = {
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

const BASE_URL = `${window.location.origin}/apps/purchases`;

export const IMAGE_PATH = {
  vehicleUpdateIcon: `${BASE_URL}/assets/icon/28px/info-icon.svg`,
  vehicleUpdateCloseIcon: `${BASE_URL}/assets/icon/12px/close.svg`,
  loadingErrorIcon: `${BASE_URL}/assets/icon/state-icons/Alert_Icon.svg`,
};
