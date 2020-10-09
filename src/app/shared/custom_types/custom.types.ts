import { IVehicleCTO } from 'src/app/data-store/models/vehiclecto.model';
import { ICellRendererParams } from 'ag-grid-community';


export interface IVehicleLabels {
    usa: IUSA;
}

export interface IUSA {
    blankStateMaintitle: string;
    blankStateSubtitle: string;
    blankStateButtonText: string;
    loadingErrorMaintitle: string;
    loadingErrorSubtitle: string;
}

export interface IVehicleAriaLabels {
    headerCheckbox: string;
    tableCheckbox: string;
}

export interface IVehicleUpdateLabels {
    heading: string;
    contentSingle: string;
    contentMultiple: string;
    acceptBtn: string;
    rejectBtn: string;

}

export interface IVehicleMaxLimitLabels {
    heading: string;
    contentSingle: string;
}

export interface IVehicleAltLabels {
    vehicleDetails: string;
    purchaseDetails: string;
    locationDetails: string;
    feesDetails: string;
    closeAllImg: string;
    expandAllImg: string;
    titleTrackingImg: string;
    psiStatusImg: string;
    arbitrationImg: string;
    updateVehicleImg: string;
    updateVehicleClose: string;
    loadingErrorImage: string;
    loadingErrorIcon?: string;
    blankStateCarImage: string;
    salesChannelLogo: string;
}

export interface IImagePath {
    vehicleUpdateIcon: string;
    vehicleUpdateCloseIcon: string;
    loadingErrorIcon: string;
}

export interface ILoadingErrorLabels {
    heading: string;
    subTitle: string;
    reloadBtn: string;
}

export type ViewPort = {
    width: number;
    height: number;
}

export type BreakPoints = {
    mxl: string;
    md: string;
}

export type Device = {
    currentDevice: string;
}

export interface IFilterConfig {
    options?: IOptions[];
    type: string;
    heading: string;
    name: string;
    id: string;
    validation?: IValidation;
    placeholder?: string;
    isExpandedByDefault: boolean;
    canFilterWithOR?: boolean;
}

export interface IOptions {
    title: string;
    count?: number;
    value?: string;
    valueArray?:string[];
}

export interface IValidation {
    minLength: number;
    maxLength: number;
    error: string;
}

export interface IErrorState {
    loadingErrorIcon?: string;
    loadingErrorIconAltText?: string;
    loadingErrorMaintitle?: string;
    loadingErrorSubtitle?: string;
}

export type Sort = { sort: string; dir: string };

export enum AssuranceStaus {
    NOT_SUBMITTED = 'NOT_SUBMITTED',
    SUBMITTED = 'SUBMITTED',
    CLOSED = 'CLOSED',
    REJECTED = 'REJECTED',
}

export enum ArbitrationStaus {
    ACTIVE = 'ACTIVE',
    CLOSED = 'CLOSED',
}

export interface DateRangeETR {
    dateFrom: string;
    dateTo: string;
}

export interface IEtrParams {
    'DateRange.From': string;
    'DateRange.To': string;
     PageNumber: string;
     PageSize: string;
     Region: string;
     fakeToken: string;
}
export interface EtrResponse extends IVehicleCTO {
    pageNumber: number;
    pageSize: number;
    totalResults: number;
}
export interface IamObject {
    accessToken: string;
    firstName: string;
    language: string;
    lastName: string;
    plId: string;
    userId: string;
    userName: string;
}
export interface IOktaAuthObject {
    accessToken: string;
    tokenType: string;
}

export interface ICellRendererParamswithCB extends ICellRendererParams {
    parentCallBack?: (type?: string, data?: boolean) => void;
}

export type ExportType = 'grid' | 'all';
