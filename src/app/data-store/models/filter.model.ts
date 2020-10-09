import { dateFilterRange } from 'src/app/shared/enums/enum';

export interface IFilterState {
    location: string[];
    organization: string[];
    vin: string;
    titleStatus: string[];
    psiStatus: string[];
    arbitrationStatus: string[];
    saleDate: string[];
    assuranceStatus: string[];
    paymentStatus: string[];
    auctionChannel: string[];
    pdiStatus: string[];
}
export class FilterState implements IFilterState {
    location: string[];
    organization: string[];
    vin: string;
    titleStatus: string[];
    psiStatus: string[];
    arbitrationStatus: string[];
    saleDate: string[];
    assuranceStatus: string[];
    paymentStatus: string[];
    auctionChannel: string[];
    pdiStatus: string[];
    
    constructor(
        location = [],
        organization= [],
        vin = '',
        titleStatus = [],
        psiStatus = [],
        arbitrationStatus = [],
        saleDate = [],
        assuranceStatus = [],
        paymentStatus = [],
        auctionChannel = [],
        pdiStatus = []
    ) {
      this.location = location;
      this.organization = organization;
      this.vin = vin;
      this.titleStatus = titleStatus;
      this.psiStatus = psiStatus;
      this.arbitrationStatus = arbitrationStatus;
      this.saleDate = saleDate;
      this.assuranceStatus = assuranceStatus ? assuranceStatus : [];
      this.paymentStatus = paymentStatus ? paymentStatus : [];
      this.auctionChannel = auctionChannel;
      this.pdiStatus = pdiStatus;
    }
}
export type IFilterStateKeys = keyof IFilterState;
