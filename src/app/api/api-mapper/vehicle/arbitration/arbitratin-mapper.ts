import {JsonObject, JsonProperty} from 'json2typescript';
import {IArbitrationData} from 'src/app/data-store/models/vehicle.model';
import {ArbitrationStaus} from './../../../../shared/custom_types/custom.types';
import {StatusMapper} from '../status-mapper';

@JsonObject('ArbitrationMapper')
export class ArbitrationMapper implements IArbitrationData {
    @JsonProperty('status', StatusMapper, true)
    private statusData: StatusMapper = new StatusMapper();

    private _statusDate: string;
    get statusDate(): string {
      return this._statusDate = this.statusData.date;
    }

    private _status: ArbitrationStaus;
    get status(): ArbitrationStaus {
      return this._status = this.statusData.name as ArbitrationStaus;
    }
}
