import {ITitleStatusData} from 'src/app/data-store/models/vehicle.model';
import {JsonObject, JsonProperty} from 'json2typescript';
import {StatusMapper} from '../status-mapper';
import {ShippingInfoMapper} from './shipping-info-mapper';

@JsonObject('TitleMapper')
export class TitleMapper implements ITitleStatusData {
    @JsonProperty('releaseMethod', String, true)
    public releaseMethod: string = undefined;

    @JsonProperty('status', StatusMapper, true)
    public statusData: StatusMapper = undefined;

    @JsonProperty('shippingInfo', ShippingInfoMapper, true)
    public shippingInfo: ShippingInfoMapper = new ShippingInfoMapper();

    private _status: string;
    get status(): string {
      return this._status = this.statusData.name;
    }

    private _statusDate: string;
    get statusDate(): string {
      return this._statusDate = this.statusData.date;
    }

    private _shippingTrackingNumber: string;
    get shippingTrackingNumber(): string {
      return this._shippingTrackingNumber = this.shippingInfo.trackingNumber;
    }

    private _shippingCarrier: string;
    get shippingCarrier(): string {
      return this._shippingCarrier = this.shippingInfo.courierName;
    }

    private _shippedDate: string;
    get shippedDate(): string {
      return this._shippedDate = this.shippingInfo.dateShipped;
    }
}
