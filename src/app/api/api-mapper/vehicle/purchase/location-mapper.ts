import {JsonObject, JsonProperty} from 'json2typescript';
import {ILocationData} from 'src/app/data-store/models/vehicle.model';
import {ILocation} from './purchase-info-metadata.model';
import {Country} from 'src/app/shared/enums/enum';

@JsonObject('LocationMapper')
export class LocationMapper implements ILocationData, ILocation {
    @JsonProperty('name', String, true)
    public locationName = '';

    @JsonProperty('addressLine', String, true)
    public address = '';

    @JsonProperty('city', String, true)
    public city = '';

    @JsonProperty('country', String, true)
    public country: Country = Country.US;

    @JsonProperty('stateProvince', String, true)
    public state = '';

    @JsonProperty('postalCode', String, true)
    public zip = '';

    @JsonProperty('phone', String, true)
    public phoneNumber = '';

    @JsonProperty('addressLine2', String, true)
    public addressLine2 = '';
}
