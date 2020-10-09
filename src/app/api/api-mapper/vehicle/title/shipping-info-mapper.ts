import {JsonObject, JsonProperty} from 'json2typescript';
import {DateConverter} from '../type-converter/date-converter';

@JsonObject('ShippingInfoMapper')
export class ShippingInfoMapper {
    @JsonProperty('trackingNumber', String, true)
    public trackingNumber: string = undefined;

    @JsonProperty('courierName', String, true)
    public courierName: string = undefined;

    @JsonProperty('dateShipped', DateConverter, true)
    public dateShipped: string = undefined;
}
