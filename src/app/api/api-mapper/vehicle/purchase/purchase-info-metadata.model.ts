import {SalesChannel, Country} from 'src/app/shared/enums/enum';

export interface IPurchaseInfoMetaData {
    type?: string;
    location?: ILocation;
    runNumber?: string;
    laneNumber?: string;
    companyId?: string;
    salesChannel?: SalesChannel;
}

export interface ILocation {
    name?: string;
    addressLine?: string;
    city?: string;
    country?: Country;
    stateProvince?: string;
    postalCode?: string;
    phone?: string;
    addressLine2?: string;
}
