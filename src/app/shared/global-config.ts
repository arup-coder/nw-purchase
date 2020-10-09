import { TitleStatus, AssuranceStatus, ArbitrationStatus,
  PsiStatus, TitleStatusUi, AssuranceStatusUi, ArbitrationStatusUi, PaymentStatusUi, PaymentStatus, SalesChannel,
  PsiStatusUi, 
  PDiStatus,
  PDiStatusUi} from './enums/enum';
import {IFilterConfig} from './custom_types/custom.types';

export const GLOBAL_SETTINGS = {
  BASE_URL: `${window.location.origin}/apps/purchases`,
  updateVehicleTimer: 30000,
  apiNeedsLoader: ['getVehicles', 'getVehiclesCount', 'Temporary', 'dummyETRforPurchases', 'Purchases'],
  breakPoints: { mxl: '1024', md: '768' },
  exportFileName: 'purchase-reporting',
  ETR: {
    pageSize : `1000`,
    Region: `US`,
    pageNummber: `1`,
    fakeToken: `3479ythglkjd2=3-[649utywpjg0kpsad';`,
    defaultDays: 30,
    defaultDaysMobile: 7,
  },
  checkUsersEligibility : false,
  resetFiltersImg: `${window.location.origin}/apps/purchases/assets/icon/filter-icons/reset-all.svg`
};

export const FILTER_SETTINGS: IFilterConfig[] = [
  {
    type: 'input',
    heading: 'VIN',
    name: 'vin',
    id: 'vin',
    validation: {
      minLength: 5,
      maxLength: 17,
      error: 'Use a minimum of 5 characters',
    },
    placeholder: 'Enter VIN',
    isExpandedByDefault: true
  },
  {
    options: [
      {
        title: 'All',
        count: 0,
        value: 'All'
      },
      {
        title: PaymentStatusUi.DUE,
        count: 0,
        valueArray: [PaymentStatus.DUE,PaymentStatus.VOIDFEESDUE]
      },
      {
        title: PaymentStatusUi.PAID,
        count: 0,
        valueArray: [PaymentStatus.PAID]
      },
      {
        title: PaymentStatusUi.VOID,
        count: 0,
        valueArray:  [PaymentStatus.VOID,PaymentStatus.VOIDFEESDUE]
      }
      ],
    type: 'checkbox',
    heading: 'Payment Status',
    name: 'paymentStatus',
    id: 'paymentStatus',
    isExpandedByDefault: true
  },
  {
    options: [
      {
        title: 'Today',
        count: 0,
      },
      {
        title: 'Yesterday',
        count: 0,
      },
      {
        title: 'Last 7 Days',
        count: 0,
      },
      {
        title: 'Last 30 Days',
        count: 0,
      },
      {
        title: 'Last 90 Days'
      },
      {
        title: 'Custom Date Range'
      }],
    type: 'date',
    heading: 'Sale Date',
    name: 'soldDateMMDDYY',
    id: 'saleDate',
    isExpandedByDefault: true
  },
  {
    options: [
      {
        title: 'All',
        count: 0,
        value: 'All'
      },
      {
        title: TitleStatusUi.NOT_HANDLED,
        count: 0,
        value: TitleStatus.NOT_HANDLED
      },
      {
        title: TitleStatusUi.ISSUE,
        count: 0,
        value: TitleStatus.ISSUE
      },
      {
        title: TitleStatusUi.NOT_RECEIVED,
        count: 0,
        value: TitleStatus.NOT_RECEIVED
      },
      {
        title: TitleStatusUi.RECEIVED,
        count: 0,
        value: TitleStatus.RECEIVED
      },
      {
        title: TitleStatusUi.SHIPPED,
        count: 0,
        value: TitleStatus.SHIPPED
      },
      {
        title: TitleStatusUi.RELEASED,
        count: 0,
        value: TitleStatus.RELEASED
      }],
    type: 'checkbox',
    heading: 'Title Status',
    name: 'titleStatus.status',
    id: 'titleStatus',
    isExpandedByDefault: true
  },
  {
    options: [
      {
        title: 'All',
        count: 0,
        value: 'All'
      },
      {
        title: AssuranceStatusUi.PURCHASED,
        count: 0,
        value: AssuranceStatus.PURCHASED
      },
      {
        title: AssuranceStatusUi.NOT_PURCHASED,
        count: 0,
        value: AssuranceStatus.NOT_PURCHASED
      }],
    type: 'checkbox',
    heading: 'Assurance Status',
    name: 'adesaAssuranceStatus',
    id: 'assuranceStatus',
    isExpandedByDefault: false
  },
  {
    options: [
      {
        title: 'All',
        count: 0,
        value: 'All'
      },
      {
        title: ArbitrationStatusUi.NOT_ARBITRATED,
        count: 0,
        value: ArbitrationStatus.NOT_ARBITRATED
      },
      {
        title: ArbitrationStatusUi.ARBITRATED,
        count: 0,
        value: ArbitrationStatus.ARBITRATED
      }],
    type: 'checkbox',
    heading: 'Arbitration Status',
    name: 'arbitration.status',
    id: 'arbitrationStatus',
    isExpandedByDefault: false
  },
  {
    options: [
      {
        title: 'All',
        count: 0,
        valueArray: [PsiStatus.NOT_ORDERED,PsiStatus.IN_PROCESS,PsiStatus.PASSED, PsiStatus.FAILED, PsiStatus.CANCELLED ]
      },
      {
        title: PsiStatusUi.NOT_ORDERED,
        count: 0,
        value: PsiStatus.NOT_ORDERED
      },
      {
        title: PsiStatusUi.IN_PROCESS,
        count: 0,
        value: PsiStatus.IN_PROCESS
      },
      {
        title: PsiStatusUi.PASSED,
        count: 0,
        value: PsiStatus.PASSED
      },
      {
        title: PsiStatusUi.FAILED,
        count: 0,
        value: PsiStatus.FAILED
      },
      {
        title: PsiStatusUi.CANCELLED,
        count: 0,
        value: PsiStatus.CANCELLED
      }],
    type: 'checkbox',
    heading: 'PSI Status',
    name: 'postSalesInspection.status',
    id: 'psiStatus',
    isExpandedByDefault: false,
    canFilterWithOR: true
  },
  {
    options: [
      {
        title: 'All',
        count: 0,
        valueArray: [PDiStatus.NOT_ORDERED, PDiStatus.PENDING, PDiStatus.COMPLETED]
      },
      {
        title: PDiStatusUi.NOT_ORDERED,
        count: 0,
        value: PDiStatus.NOT_ORDERED
      },
      {
        title: PDiStatusUi.PENDING,
        count: 0,
        value: PDiStatus.PENDING
      },
      {
        title: PDiStatusUi.COMPLETED,
        count: 0,
        value: PDiStatus.COMPLETED
      }],
    type: 'checkbox',
    heading: 'PDI Status',
    name: 'preDeliveryInspection.status',
    id: 'pdiStatus',
    isExpandedByDefault: false,
    canFilterWithOR: true
  },
  {
    options: [
      {
        title: 'All',
        count: 0,
        value: 'All'
      },
      {
        title: SalesChannel.DEALERBLOCK_UI,
        count: 0,
        value: SalesChannel.DEALERBLOCK
      },
      {
        title: SalesChannel.INLANE_UI,
        count: 0,
        value: SalesChannel.INLANE
      },
      {
        title: SalesChannel.SIMULCAST_UI,
        count: 0,
        value:  SalesChannel.SIMULCAST
      }],
    type: 'checkbox',
    heading: 'Auction Channel',
    name: 'auctionChannelValue',
    id: 'auctionChannel',
    isExpandedByDefault: false
  },
];
