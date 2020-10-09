import {JsonObject, JsonProperty} from 'json2typescript';
import {AssuranceStaus} from './.././../../../shared/custom_types/custom.types';
import {DateConverter} from '../type-converter/date-converter';

@JsonObject('AssuranceStatusMapper')
export class AssuranceStatusMapper {
    @JsonProperty('name', String, true)
    public assuranceName: AssuranceStaus = undefined;

    @JsonProperty('date', DateConverter, true)
    public date: string = undefined;
}
