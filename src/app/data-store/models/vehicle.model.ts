import { AssuranceStaus, ArbitrationStaus } from './../../shared/custom_types/custom.types';

export interface IVehicle {
    createdAt?: string;
    modifiedAt?: string;
    originVehicleId?: string;
    arId?: string;
    nwVehicleId?: string;
    originBuyerOrganizationId?: string;
    buyerOrganizationName?: string;
    orgAuctionAccessId?: string;
    nwBuyerOrganizationId?: string;
    buyerName?: string;
    buyerAuctionAccessId?: string;
    originPurchaserLoginId?: string;
    purchaserFirstName?: string;
    purchaserLastName?: string;
    purchaserLoginName?: string;
    soldDate?: number | string;
    year?: number | string;
    make?: string;
    model?: string;
    series?: string;
    trim?: string;
    vin?: string;
    locationCity?: string;
    stateAbbreviation?: string;
    odometer?: string | number;
    odometerUnitOfMeasure?: string;
    exteriorColor?: string;
    interiorColor?: string;
    lbRunNumber?: string;
    lbLaneNumber?: string;
    lbLotNumber?: string;
    nwPurchaserLoginId?: string;
    auctionChannelValue?: string;
    locationId?: string;
    vinTrimmed?: string;
    vehicleTitle?: string;
    soldDateMMDDYY?: string;
    assurancePaid?: boolean;
    assuranceOriginTimestamp?: number | string;
    adesaAssuranceDate?: string;
    adesaAssuranceStatus?: AssuranceStaus;
    assuranceExpired?: boolean;
    eligibleUntilFormatted?: string;
    location?: ILocationData;
    purchases?: IPurchasesData;
    claim?: IClaimData;
    psi?: IPSIData;
    arbitration?: IArbitrationData;
    titleStatus?: ITitleStatusData;
    button?: any;
    vdpLink?: string;
    totalAmount?: number;
    totalAmountDue?: number;
    adesaAssuranceEligible?: boolean;
    auctionChannel?: string;
    postSalesInspection?: IPSIData;
    preDeliveryInspection?: IPSIData;
    paymentStatus?: string;
}

export interface IPurchasesData {
    amount?: string | number;
    buyerOrganizationId?: string;
    createdAt?: string;
    currency?: string;
    modifiedAt?: string;
    originTimestamp?: string | number;
    originVehicleId?: string;
    purchaseDate?: string | number;
    purchaseId?: string;
    source?: string;
    totalAmountCents?: string | number;
    totalAmountDueCents?: string | number;
    vehicleId?: string;
    vehicleStatus?: string;
    lineItems?: ILineItem[];
}

export interface ILineItem {
    amount?: string | number;
    amountCents?: string | number;
    createdAt?: string;
    lineItemDescription?: string;
    lineItemId?: string;
    lineItemType?: string;
    modifiedAt?: string;
    parentLineItemId?: string;
    paymentDueDate?: string | number;
    paymentGroupId?: string;
    paymentStatus?: string;
    payOnline?: boolean;
    purchaseId?: string;
    taxes?: ITaxes[];
}

export interface ITaxes {
    amount?: string | number;
    lineItemId?: string;
    paymentStatus?: string;
    name?: string;
}

export interface IArbitrationData {
    originTimeStamp?: string;
    statusDate?: string;
    status?: string;
}

export interface ITitleStatusData {
    status?: string;
    statusDate?: string;
    shippingTrackingNumber?: string;
    shippingCarrier?: string;
    releasedDate?: string;
    receivedDate?: string;
    shippedDate?: string;
    releaseMethod?: string;
}

export interface IPSIData {
    originTimeStamp?: string | number;
    statusDate?: string;
    status?: string;
    expirationDateInfo?: string;
}

export interface IClaimData {
    resolutionDate?: string;
    reason?: string;
    originTimestamp?: string;
    submitDate?: string;
    status?: string;
}

export interface ILocationData {
    nwLocationId?: string;
    locationName?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    phoneNumber?: string;
    createdAt?: string;
    modifiedAt?: string;
}

export interface IGridColumns {
    field: string;
    header: string;
    type: string;
    width: string;
    id: string;
}

export interface IFeesColumns {
    field: string;
    header: string;
    type: string;
    childColumns?: IFeesChildColumns;
}

export interface IFeesChildColumns {
    field: string;
    type: string;
}
