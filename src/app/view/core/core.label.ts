import {GLOBAL_SETTINGS} from 'src/app/shared/global-config';

export const BLANK_STATE_COMPONENT = {
  usa: {
    blankStateMaintitle: 'You have not made any purchases yet.',
    blankStateSubtitle: 'Search for vehicles and start bidding.',
    blankStateButtonText: 'Search Vehicles',
  },
};

export const VEHICLE_ALT_LABELS = {
  blankStateCarImage: 'Car search image',
};

export const VEHICLE_UPDATE_LABELS = {
  heading: 'You have new unpaid vehicles.',
  contentSingle: '1 vehicle has been added to your account. Please refresh the page to view them.',
  contentMultiple: 'vehicles have been added to your account. Please refresh the page to view them.',
  acceptBtn: 'View new vehicles',
  rejectBtn: 'Ignore',
};

export const IMAGE_PATH = {
  carIcon: `${GLOBAL_SETTINGS.BASE_URL}/assets/icon/state-icons/search-car-icon.png`,
  exportIcon: `${GLOBAL_SETTINGS.BASE_URL}/assets/icon/24px/Excel.svg`,
  printIcon: `${GLOBAL_SETTINGS.BASE_URL}/assets/icon/24px/Print.svg`,
  chevronLeft : `${GLOBAL_SETTINGS.BASE_URL}/assets/icon/24px/SmChevronLeft.svg`,
  ieWarningIcon: `${GLOBAL_SETTINGS.BASE_URL}/assets/icon/network-warning/network-warning.svg`,
};

export const CHIP_COMPONENT = {
  usa: {
    selectedFilter: 'Your Selected Filters: ',
  },
};
export const HEADER_LABELS = {
  usa: {
    pageTitle: 'Purchase Reporting',
  },
};

export const IE_LOADING_ERROR_LABELS = {
  iconImageAltText:'loading error image',
  mainTitle:'The Purchase Reporting page is not optimized for this browser.',
  subTitlePrefix:'Please try using',
  subTitleSuffix:'to view this page.',
  chromeUrl:'https://www.google.com/chrome/',
  safariUrl:'https://support.apple.com/downloads/safari',
  chromeUrlText:'Chrome',
  safariUrlText:'Safari'
};
