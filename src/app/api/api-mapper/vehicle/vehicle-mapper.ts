import {IVehicle, IPSIData} from 'src/app/data-store/models/vehicle.model';
import {JsonObject, JsonProperty} from 'json2typescript';
import {TitleMapper} from './title/title-mapper';
import {VehicleMetadataMapper} from './vehicle-metadata/vehicle-metadata-mapper';
import {PurchaseMapper} from './purchase/purchase-mapper';
import {DateConverter} from './type-converter/date-converter';
import {LineItemGroupMapper} from './lineitem-group/lineitem-groups-mapper';
import {CentsToDollarConverter} from './type-converter/cents-to-dollar-converter';
import {BuyerOrOrgMapper} from './buyer-or-org/buyer-mapper';
import {LocationMapper} from './purchase/location-mapper';
import {PsiMapper} from './psi/psi-mapper';
import {AssuranceMapper} from './assurance/assurance-mapper';
import * as moment from 'moment';
import {AssuranceStaus} from './../../../shared/custom_types/custom.types';
import {ArbitrationMapper} from './arbitration/arbitratin-mapper';
import {PaymentStatus} from 'src/app/shared/enums/enum';
import { PdiMapper } from './pdi/pdi-mapper';

@JsonObject('VehicleAPIMapper')
export class VehicleMapper implements IVehicle {
    @JsonProperty('sourcePurchaseId', String, true)
    public nwVehicleId = '';

    @JsonProperty('purchasePaymentStatus', String, true)
    public paymentStatus: PaymentStatus = undefined;

    @JsonProperty('title', TitleMapper, true)
    public titleStatus: TitleMapper = undefined;

    @JsonProperty('postSaleInspection', PsiMapper, true)
    public postSalesInspection: PsiMapper = undefined;

    @JsonProperty('preDeliveryInspection', PdiMapper, true)
    public preDeliveryInspection: PdiMapper = undefined;

    @JsonProperty('arbitration', ArbitrationMapper, true)
    public arbitration: ArbitrationMapper = new ArbitrationMapper();

    @JsonProperty('purchaseDate', DateConverter, true)
    public soldDate: string = undefined;

    @JsonProperty('metadata', VehicleMetadataMapper, true)
    private metadata: VehicleMetadataMapper = undefined;

    @JsonProperty('purchaseInfo', PurchaseMapper, true)
    private purchaseInfo: PurchaseMapper = undefined;

    @JsonProperty('lineItemGroups', [LineItemGroupMapper], true)
    private lineItemGroups: LineItemGroupMapper[] = [];

    @JsonProperty('totalAmount', CentsToDollarConverter, true)
    public totalAmount: number = undefined;

    @JsonProperty('totalAmountDue', CentsToDollarConverter, true)
    public totalAmountDue: number = undefined;

    @JsonProperty('buyer', BuyerOrOrgMapper, true)
    private org: BuyerOrOrgMapper = undefined;

    @JsonProperty('purchaser', BuyerOrOrgMapper, true)
    private purchaser: BuyerOrOrgMapper = undefined;

    @JsonProperty('assurance', AssuranceMapper, true)
    private assurance: AssuranceMapper = new AssuranceMapper();

    private _vin: string;
    get vin(): string {
      return this._vin = this.metadata.vin;
    }

    private _soldDateMMDDYY: string;
    get soldDateMMDDYY(): string {
      return this._soldDateMMDDYY = this.soldDate;
    }

    private _year: number | string;
    get year(): number | string {
      return this._year = this.metadata.year;
    }

    private _make: string;
    get make(): string {
      return this._make = this.metadata.make;
    }

    private _model: string;
    get model(): string {
      return this._model = this.metadata.model;
    }

    private _series: string;
    get series(): string {
      return this._series = this.metadata.series;
    }

    private _trim: string;
    get trim(): string {
      return this._trim = this.metadata.trim;
    }

    private _vehicleTitle: string;
    get vehicleTitle(): string {
      return this._vehicleTitle = `${this.year} ${this.make} ${this.model} ${this.series} ${this.trim}`;
    }

    private _vinTrimmed: string;
    get vinTrimmed(): string {
      const len = this.metadata.vin.length;
      return this._vinTrimmed = this.metadata.vin.slice(len - 6, len);
    }

    private _location: LocationMapper;
    get location(): LocationMapper {
      return this._location = this.purchaseInfo.metadata.location;
    }

    private _stateAbbreviation: string;
    get stateAbbreviation(): string {
      return this._stateAbbreviation = this.purchaseInfo.metadata.location.state;
    }

    private _locationCity: string;
    get locationCity(): string {
      return this._locationCity = this.purchaseInfo.metadata.location.city;
    }

    private _exteriorColor: string;
    get exteriorColor(): string {
      return this._exteriorColor = this.metadata.exteriorColor;
    }

    private _interiorColor: string;
    get interiorColor(): string {
      return this._interiorColor = this.metadata.interiorColor;
    }

    private _odometerUnitOfMeasure: string;
    get odometerUnitOfMeasure(): string {
      return this._odometerUnitOfMeasure = this.metadata.odometer.unitOfMeasure;
    }

    private _odometer: number | string;
    get odometer(): number | string {
      return this._odometer = this.metadata.odometer.value;
    }

    private _vdpLink: string;
    get vdpLink(): string {
      return this._vdpLink = this.metadata.vdpLink;
    }

    private _purchases: PurchaseMapper = undefined;
    get purchases(): PurchaseMapper {
      this._purchases = this.purchaseInfo;
      this._purchases.amount = this.totalAmount;
      this._purchases.lineItems = [];
      this._purchases.lineItems = this.lineItemGroups.flatMap(group => group.lineItems);
      return this._purchases;
    }

    private _buyerName: string;
    get buyerName(): string {
      return this._buyerName = this.purchaser.name;
    }

    private _buyerAuctionAccessId: string;
    get buyerAuctionAccessId(): string {
      return this._buyerAuctionAccessId = this.purchaser.auctionAccessId;
    }

    private _buyerOrganizationName: string;
    get buyerOrganizationName(): string {
      return this._buyerOrganizationName = this.org.name;
    }

    private _orgAuctionAccessId: string;
    get orgAuctionAccessId(): string {
      return this._orgAuctionAccessId = this.org.auctionAccessId;
    }

    private _nwBuyerOrganizationId: string;
    get nwBuyerOrganizationId(): string {
      return this._nwBuyerOrganizationId = this.org.auctionAccessId;
    }

    private _lbRunNumber: string;
    get lbRunNumber(): string {
      return this._lbRunNumber = this.purchaseInfo.metadata.runNumber;
    }

    private _lbLaneNumber: string;
    get lbLaneNumber(): string {
      return this._lbLaneNumber = this.purchaseInfo.metadata.laneNumber;
    }

    private _auctionChannelValue: string;
    get auctionChannelValue(): string {
      return this._auctionChannelValue = this.purchaseInfo.metadata.salesChannel;
    }

    private _auctionChannel: string;
    get auctionChannel(): string {
      return this._auctionChannel = this.purchaseInfo.metadata.salesChannel;
    }

    

    private _assurancePaid: boolean;
    get assurancePaid(): boolean {
      return this._assurancePaid = this.assurance.isSubscribed;
    }

    private _eligibleUntilFormatted: string;
    get eligibleUntilFormatted(): string {
      return this._eligibleUntilFormatted = this.assurance.expirationDate;
    }

    private _adesaAssuranceStatus: AssuranceStaus;
    get adesaAssuranceStatus(): AssuranceStaus {
      return this._adesaAssuranceStatus = this.assurance.status.assuranceName;
    }

    private _adesaAssuranceDate: string;
    get adesaAssuranceDate(): string {
      return this._adesaAssuranceDate = this.assurance.status.date;
    }

    private _assuranceExpired: boolean;
    get assuranceExpired(): boolean {
      return this._assuranceExpired =  (moment(this.assurance.expirationDate, 'MM/DD/YY').valueOf() / 1000) <= moment().unix();
    }

    private _adesaAssuranceEligible: boolean;
    get adesaAssuranceEligible(): boolean {
      return this._adesaAssuranceEligible = this.assurance.isEligible;
    }

    private _psi: IPSIData;
    get psi(): IPSIData {
      return (this.postSalesInspection) ? this.postSalesInspection : this.preDeliveryInspection;
    }

}
