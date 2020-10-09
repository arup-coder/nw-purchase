import {IVehicleUpdateLabels, IImagePath, ILoadingErrorLabels, ArbitrationStaus, IVehicleMaxLimitLabels} from './../shared/custom_types/custom.types';
import {IVehicle, IPurchasesData, ITaxes} from './../data-store/models/vehicle.model';
import {FilterState} from '../data-store/models/filter.model';
import { GLOBAL_SETTINGS } from '../shared/global-config';
import Utils from '../shared/utils/utils';
const BaseUrl = `${window.location.origin}/apps/purchases`;
const taxes: ITaxes[] = [
  {
    lineItemId: '1d02598c-9adf-406e-a11d-4d00eb1f52ce',
    amount: 2000,
    paymentStatus: 'unpaid',
  },
];

export const purchases: IPurchasesData = {
  purchaseId: '74f24401-25d1-4f13-9972-68c6f37216c4',
  vehicleId: '6c4eb1fe-71ef-4be4-98c5-d7760a60450c',
  createdAt: '',
  modifiedAt: '',
  buyerOrganizationId: '8136',
  originVehicleId: '561321221518190',
  source: 'AMS',
  currency: 'USD',
  vehicleStatus: 'ACTIVE',
  totalAmountCents: 2000000,
  totalAmountDueCents: 1000000,
  purchaseDate: 1000000,
  lineItems: [
    {
      lineItemId: '9d02498b-9adf-406e-a91d-7d00eb1f52cd',
      paymentGroupId: 'c0b0ada6-15cc-406e-ac18-26873503dc02',
      paymentStatus: 'unpaid',
      payOnline: true,
      amountCents: 5000,
      lineItemDescription: 'Dummy price',
      lineItemType: '2',
      parentLineItemId: 'c0b0ada6-15cc-406e-ac18-26873503dc02',
      paymentDueDate: 1000000,
      purchaseId: 'dsdasdasd',
      taxes,
      amount: 1111,
    },
  ],
  originTimestamp: 1579154139000,
  amount: 111,
};

export const VehiclesMockData: IVehicle[] = [
  {
    createdAt: '2020-05-11T09:00:26.143Z',
    modifiedAt: '2020-05-29T12:44:48.205Z',
    originVehicleId: '584979092',
    arId: null,
    nwVehicleId: 'b8abd9e4-785b-5e11-8775-2d92b67b6e77',
    originBuyerOrganizationId: '28929',
    nwBuyerOrganizationId: '9950edfd-7583-434d-af48-6c4b83d1181d',
    buyerOrganizationName: 'BILL BROWN FORD INC.',
    originPurchaserLoginId: '373603',
    purchaserFirstName: 'JABAR AURANG ZEB',
    purchaserLastName: 'KHAN',
    purchaserLoginName: 'extremeautomart',
    soldDate: '1588690099000',
    year: 2014,
    make: 'SUBARU',
    model: 'IMPREZA WAGON',
    series: '2.0I SPORT PREMIUM',
    trim: null,
    vin: 'JF1GPAL65E8211936',
    locationCity: 'BELTON',
    stateAbbreviation: 'MO',
    odometer: 103686,
    odometerUnitOfMeasure: 'mi',
    exteriorColor: 'Silver',
    interiorColor: 'BLACK',
    lbRunNumber: null,
    lbLaneNumber: null,
    lbLotNumber: null,
    nwPurchaserLoginId: '0a2f92c8-1e5a-48f7-8853-185dd420b448',
    auctionChannelValue: 'Simulcast',
    assurancePaid: true,
    assuranceOriginTimestamp: '1590425653',
    locationId: '959a894c-9370-5e28-abca-86d055790abb',
    vinTrimmed: '211936',
    vehicleTitle: '2014 SUBARU IMPREZA WAGON  2.0I SPORT PREMIUM',
    soldDateMMDDYY: '05/05/20',
    adesaAssuranceDate: '01/19/70',
    location: {
      nwLocationId: '959a894c-9370-5e28-abca-86d055790abb',
      locationName: 'Adesa United States',
      address: '13085 Hamilton Crossing Blvd',
      city: 'Carmel',
      state: 'IN',
      zip: '46032',
      phoneNumber: '8009233725',
      createdAt: '2020-04-27T20:07:37.118Z',
      modifiedAt: '2020-05-26T18:07:18.931Z',
    },
    purchases: {
      purchaseId: 'a2c49ee0-5be1-b0f8-cf08-c503e77741cb',
      createdAt: '2020-05-11T10:49:10.218Z',
      modifiedAt: '2020-05-11T10:49:10.218Z',
      vehicleId: 'b8abd9e4-785b-5e11-8775-2d92b67b6e77',
      buyerOrganizationId: null,
      originVehicleId: '561321221518190',
      source: 'AMS',
      currency: 'USD',
      vehicleStatus: null,
      totalAmountCents: '1000000',
      totalAmountDueCents: '1000000',
      purchaseDate: '1579154139000',
      originTimestamp: '1579154139000',
      amount: 10000,
      lineItems: [
        {
          lineItemId: '28773ec7-d77a-13e5-c653-a628e98db6d3',
          purchaseId: 'a2c49ee0-5be1-b0f8-cf08-c503e77741cb',
          createdAt: '2020-05-11T10:49:10.270Z',
          modifiedAt: '2020-05-11T10:49:10.270Z',
          paymentGroupId: 'c0b0ada6-15cc-406e-ac18-26873503dc02',
          paymentStatus: 'unpaid',
          amountCents: '800',
          lineItemType: 'FEES',
          parentLineItemId: 'c0b0ada6-15cc-406e-ac18-26873503dc02',
          paymentDueDate: '1579154139000',
          lineItemDescription: 'Dummy price',
          payOnline: true,
          amount: 8,
          taxes: [],
        },
        {
          lineItemId: '3115a721-3270-2fba-8b1c-2810c672ee2a',
          purchaseId: 'a2c49ee0-5be1-b0f8-cf08-c503e77741cb',
          createdAt: '2020-05-11T10:49:10.270Z',
          modifiedAt: '2020-05-11T10:49:10.270Z',
          paymentGroupId: 'c0b0ada6-15cc-406e-ac18-26873503dc02',
          paymentStatus: 'unpaid',
          amountCents: '5000',
          lineItemType: 'FEES',
          parentLineItemId: 'c0b0ada6-15cc-406e-ac18-26873503dc02',
          paymentDueDate: '1579154139000',
          lineItemDescription: 'Dummy price',
          payOnline: true,
          amount: 50,
          taxes: [
            {
              lineItemId: 'f6f5f939-c21b-84ed-436d-dfd9d4a3c780',
              amount: 12,
              paymentStatus: 'unpaid',
            },
            {
              lineItemId: '946ff1dd-c71a-9919-597c-ed88fb998fd8',
              amount: 38,
              paymentStatus: 'unpaid',
            },
          ],
        },
      ],
    },
    claim: {
      status: 'Open',
      submitDate: '01/19/70',
      resolutionDate: '01/19/70',
      originTimestamp: '01/19/70',
    },
    psi: {
      status: 'In process',
      statusDate: '01/19/70',
      originTimeStamp: '01/19/70',
    },
    arbitration: {
      status: ArbitrationStaus.ACTIVE,
      statusDate: '01/19/70',
      originTimeStamp: '01/19/70',
    },
    titleStatus: {
      status: 'Rejected',
      shippingTrackingNumber: 'AXW1111',
      shippingCarrier: 'DTS',
      statusDate: '01/19/70',
      releasedDate: '01/19/70',
      receivedDate: '01/19/70',
      shippedDate: '01/19/70',
    },
    adesaAssuranceEligible: true,
  }];

export const VehicleUpdateLabels: IVehicleUpdateLabels = {
  heading: 'You have new unpaid vehicles.',
  contentSingle: '1 vehicle has been added to your account. Please refresh the page to view them.',
  contentMultiple: 'vehicles have been added to your account. Please refresh the page to view them.',
  acceptBtn: 'View new vehicles',
  rejectBtn: 'Ignore',
};

export const VehicleMaxLimitLabels:IVehicleMaxLimitLabels = {
   heading : `Only the first ${Utils.formatNumberToCommaSeparated(GLOBAL_SETTINGS.ETR.pageSize)} results will be shown`,
   contentSingle: `Your search has generated more than ${Utils.formatNumberToCommaSeparated(GLOBAL_SETTINGS.ETR.pageSize)} results. To see fewer, please try using a smaller or custom date range.`
  };
 


export const LoadingErrorLabels: ILoadingErrorLabels = {
  heading: 'There is a problem loading parts of this page',
  reloadBtn: 'Reload this Page',
  subTitle: 'Sorry, there is a technical problem that has prevented parts of this page from loading. Try reloading this page. If the issue persists, please try again at a later time.',
};


export const VehicleAltLabels = {
  vehicleDetails: 'vehicle details image',
  purchaseDetails: 'purchase details image',
  locationDetails: 'location details image',
  feesDetails: 'fees image',
  closeAllImg: 'close all vehicles image',
  expandAllImg: 'expand all vehicles image',
  titleTrackingImg: 'title tracking image',
  psiStatusImg: 'psi component icon',
  arbitrationImg: 'arbitration image',
  updateVehicleImg: 'update vehicle info image',
  blankStateCarImage: 'Car search image',
  updateVehicleClose: 'update vehicle close image',
  loadingErrorImage: 'loading error image',
  salesChannelLogo: 'sales channel image',

};

export const ImagePath: IImagePath = {
  vehicleUpdateIcon: `${BaseUrl}/assets/icon/28px/info-icon.svg`,
  vehicleUpdateCloseIcon: `${BaseUrl}/assets/icon/12px/close.svg`,
  loadingErrorIcon: `${BaseUrl}/assets/icon/state-icons/Alert_Icon.svg`,
};


export const VehicleLabels = {
  usa: {

    blankStateMaintitle: 'You have not made any purchases yet.',
    blankStateSubtitle: 'Search for vehicles and start bidding.',
    blankStateButtonText: 'Search Vehicles',
    loadingErrorMaintitle: 'There is problem loading this content',
    loadingErrorSubtitle: 'Please try reloading this page',
  },
};

export const GetVehicleApiError = {
  error: {
    errorPayload: {
      component: '',
      errorSource: 'GET Vehicle Api',
      errorDescription: 'Http failure response for (unknown url): 500 Generic server error',
    },
    errorState: true,
  },
};

export const GETUpdatedVehiclesCount = {
  error: {
    errorPayload: {
      component: '',
      errorSource: 'GET Vehicle Count',
      errorDescription: 'Http failure response for (unknown url): 500 Generic server error',
    },
    errorState: true,
  },
};

export const mockFilterState = {
  location: ['New Texas', 'New Jersey'],
  vin: '123456789',
} as FilterState;
