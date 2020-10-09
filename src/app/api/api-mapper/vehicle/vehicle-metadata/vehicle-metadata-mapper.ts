import {JsonObject, JsonProperty} from 'json2typescript';
import {OdometerMapper} from './odometer-mapper';
import {nullUndefinedToStringConverter} from '../type-converter/null-undefined-to-string-converter';

@JsonObject('VehicleMetadataMapper')
export class VehicleMetadataMapper {
    @JsonProperty('year', nullUndefinedToStringConverter)
    public year: number | string = undefined;

    @JsonProperty('make', String, true)
    public make = '';

    @JsonProperty('model', String, true)
    public model = '';

    @JsonProperty('vin', String, true)
    public vin = '';

    @JsonProperty('series', String, true)
    public series = '';

    @JsonProperty('trim', String, true)
    public trim = '';

    @JsonProperty('exteriorColor', String, true)
    public exteriorColor = '';

    @JsonProperty('interiorColor', String, true)
    public interiorColor = '';

    @JsonProperty('odometer', OdometerMapper, true)
    public odometer: OdometerMapper = undefined;

    @JsonProperty('detailedInfoUrl', String, true)
    public vdpLink = '#';
}
