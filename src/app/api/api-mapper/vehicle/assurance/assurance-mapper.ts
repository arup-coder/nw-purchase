import {JsonObject, JsonProperty} from 'json2typescript';
import {CentsToDollarConverter} from '../type-converter/cents-to-dollar-converter';
import {DateConverter} from '../type-converter/date-converter';
import {AssuranceStatusMapper} from './assurance-status-mapper';

@JsonObject('AssuranceMapper')
export class AssuranceMapper {
    @JsonProperty('price', CentsToDollarConverter, true)
    public price: number = undefined;

    @JsonProperty('terms', String, true)
    public terms = '';

    @JsonProperty('expirationDate', DateConverter, true)
    public expirationDate: string = undefined;

    @JsonProperty('reasons', [String], true)
    public reasons: string[] = undefined;

    @JsonProperty('isSubscribed', Boolean, true)
    public isSubscribed: boolean = undefined;

    @JsonProperty('isEligible', Boolean, true)
    public isEligible: boolean = undefined;

    @JsonProperty('status', AssuranceStatusMapper, true)
    public status: AssuranceStatusMapper = new AssuranceStatusMapper();
}
