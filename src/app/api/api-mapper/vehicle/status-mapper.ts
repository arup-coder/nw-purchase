import {JsonObject, JsonProperty} from 'json2typescript';
import {DateConverter} from './type-converter/date-converter';

@JsonObject('StatusMapper')
export class StatusMapper {
    @JsonProperty('name', String, true)
    public name = '';

    @JsonProperty('date', DateConverter, true)
    public date: string = undefined;
}
