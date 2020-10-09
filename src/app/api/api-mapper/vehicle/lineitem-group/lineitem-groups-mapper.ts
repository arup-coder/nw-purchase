import {JsonObject, JsonProperty} from 'json2typescript';
import {LineItemMapper} from './lineitem-mapper';

@JsonObject('LineItemGroupMapper')
export class LineItemGroupMapper {
    @JsonProperty('paymentDueDate', String, true)
    public paymentDueDate = '';

    @JsonProperty('paymentStatus', String, true)
    public paymentStatus = '';

    @JsonProperty('isPayableOnline', Boolean, true)
    public isPayableOnline: boolean | string = 'unknown';

    @JsonProperty('lineItems', [LineItemMapper], true)
    public lineItems: LineItemMapper[] = undefined;
}
