import {JsonObject, JsonProperty} from 'json2typescript';
import {ITaxes} from 'src/app/data-store/models/vehicle.model';
import { CentsToDollarConverter } from '../type-converter/cents-to-dollar-converter';

@JsonObject('TaxMapper')
export class TaxMapper implements ITaxes {
    @JsonProperty('amount', CentsToDollarConverter, true)
    public amount: number = undefined;

    @JsonProperty('name', String, true)
    public name: string = undefined;
}
