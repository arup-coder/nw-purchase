export enum ApiConstant {
    GETVEHICLE = 'GET Vehicle Api',
    VEHICLECOUNT = 'GET Vehicle Count',
    UPDATEDVEHICLECOUNT = 'GET Updated Vehicles Count'
  }
export enum DebugMode {
    LOGGING,
    ENABLE,
    DISABLE
}
export enum NullCheckMode {
    DISALLOW_NULL,
    ALLOW_NULL,
    DISALLOW_OBJECT_NULL
}
export enum Country {
  US = 'US',
  CA = 'CA',
}
export enum SalesChannel {
  INLANE = 'INLANE',
  DEALERBLOCK = 'DEALERBLOCK',
  SIMULCAST = 'SIMULCAST',
  TRADEREV = 'TRADEREV',
  DEALERBLOCK_UI = 'DealerBlock',
  INLANE_UI = 'In Lane',
  SIMULCAST_UI = 'Simulcast',
  TRADEREV_UI = 'Traderev',
}
export enum TitleStatus {
  SHIPPED = 'SHIPPED',
  RELEASED = 'RELEASED',
  RECEIVED = 'RECEIVED',
  NOT_RECEIVED = 'NOT_RECEIVED',
  NOT_HANDLED = 'NOT_HANDLED',
  ISSUE = 'ISSUE'
}
export enum TitleStatusUi {
  SHIPPED = 'Shipped',
  RELEASED = 'Released',
  RECEIVED = 'Received',
  NOT_RECEIVED = 'Not Received',
  NOT_HANDLED = 'Not Handled',
  ISSUE = 'Issue',
  NOT_ORDERED = 'Not Ordered'
}
export enum AssuranceStatus {
  PURCHASED  = 'PURCHASED',
  NOT_PURCHASED = 'NOT_PURCHASED'
}
export enum ArbitrationStatus {
  NOT_ARBITRATED = 'NOT_ARBITRATED',
  ARBITRATED = 'ARBITRATED'

}
export enum PsiStatus {
  NOT_ORDERED = 'NOT_ORDERED',
  IN_PROCESS = 'IN_PROCESS',
  PASSED = 'PASSED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
  NOT_ORDERED_UI = 'Not Ordered',
  IN_PROCESS_UI = 'In Process',
  PASSED_UI = 'Passed',
  FAILED_UI = 'Failed',
  CANCELLED_UI = 'Cancelled'
  }
export enum PDiStatus {
  NOT_ORDERED = 'NOT_ORDERED',
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED'
}
export enum filterColumns {
  vin = 'vin',
  titleStatus = 'titleStatus.status',
  saleDate = 'soldDateMMDDYY',
  arbitrationStatus = 'arbitration.status',
  psiStatus = 'postSalesInspection.status',
  assuranceStatus = 'adesaAssuranceStatus',
  paymentStatus = 'paymentStatus',
  auctionChannel = 'auctionChannel',
  pdiStatus = 'preDeliveryInspection.status'
}
export enum dateFilterRange {
  customDateRange = 'Custom range',
  lastSevenDays = 'Last 7 Days',
  lastThirtyDays = 'Last 30 Days',
  yesterday = 'Yesterday',
  today = 'Today',
  lastNinetyDays = 'Last 90 Days'
}
export enum ArbitrationStatusUi {
  NOT_ARBITRATED = 'Not Arbitrated',
  ARBITRATED = 'Arbitrated'
}
export enum AssuranceStatusUi {
  PURCHASED  = 'Purchased',
  NOT_PURCHASED = 'Not Purchased',
}
export enum PDiStatusUi {
  NOT_ORDERED = 'Not Ordered',
  PENDING = 'Pending',
  COMPLETED = 'Completed'
}

export enum PaymentStatus {
  PAID = 'PAID',
  DUE = 'DUE',
  VOID = 'VOID',
  VOIDFEESDUE = 'VOIDFEESDUE',
}

export enum PaymentStatusUi {
  PAID = 'Paid',
  DUE = 'Due',
  VOID = 'Void',
  VOIDFEESDUE = 'Void',
  VOIDFEESDUE_FL = 'Void-Fees Due',
}

export enum PaymentStatusFilterUi {
  PAID = 'Paid',
  DUE = 'Due',
  VOID = 'Void'
}

export enum PsiStatusUi {
  NOT_ORDERED = 'Not Ordered',
  IN_PROCESS = 'In Process',
  PASSED = 'Passed',
  FAILED = 'Failed',
  CANCELLED = 'Cancelled'
  }
