import {IVehicleCTO} from 'src/app/data-store/models/vehiclecto.model';
import {VehicleMapper} from './vehicle/vehicle-mapper';
import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('GetVehicleMapper')
export class GetVehicleMapper implements IVehicleCTO {
    @JsonProperty('data', [VehicleMapper])
    public data: VehicleMapper[] = undefined;

}
