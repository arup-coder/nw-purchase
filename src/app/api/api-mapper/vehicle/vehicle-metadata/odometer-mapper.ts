import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('OdometerMapper')
export class OdometerMapper {
    @JsonProperty('value', Number, true)
    public value: number | string = undefined;

    @JsonProperty('unitOfMeasure', String, true)
    public unitOfMeasure: string = undefined;
}
