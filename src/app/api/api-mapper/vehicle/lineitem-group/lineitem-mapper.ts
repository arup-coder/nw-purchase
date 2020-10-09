import {JsonObject, JsonProperty} from 'json2typescript';
import {ILineItem} from 'src/app/data-store/models/vehicle.model';
import {TaxMapper} from './tax-mapper';
import {CentsToDollarConverter} from '../type-converter/cents-to-dollar-converter';

@JsonObject('LineItemMapper')
export class LineItemMapper implements ILineItem {
    @JsonProperty('$type', String, true)
    public lineItemType = '';

    @JsonProperty('description', String, true)
    public lineItemDescription = '';

    @JsonProperty('sourceId', String, true)
    public parentLineItemId = '';

    @JsonProperty('amount', CentsToDollarConverter, true)
    public amount: number = undefined;

    @JsonProperty('taxes', [TaxMapper], true)
    public taxes: TaxMapper[] = undefined;
}
