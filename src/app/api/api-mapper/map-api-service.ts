import {JsonConvert, OperationMode, ValueCheckingMode} from 'json2typescript';
import {Injectable} from '@angular/core';
import {GetVehicleMapper} from './get-vehicle-mapper';
import {IVehicleCTO} from 'src/app/data-store/models/vehiclecto.model';
import {ErrorHandlerService} from 'src/app/shared/services/error-handler.service';
import Utils from 'src/app/shared/utils/utils';
import {ApiConstant, DebugMode, NullCheckMode} from 'src/app/shared/enums/enum';

@Injectable({
  providedIn: 'root',
})
export class MapApiService {
    private jsonConvert: JsonConvert;

    constructor(
      private errorHandlerService: ErrorHandlerService,
    ) {
      this.jsonConvert = new JsonConvert();
    }

    public setConfig(
        debugMode: DebugMode = DebugMode.DISABLE,
        ignorePrimitiveChecks = false,
        valueCheckingMode: NullCheckMode = NullCheckMode.ALLOW_NULL,
    ) {
      this.jsonConvert.operationMode = OperationMode.ENABLE;
      this.jsonConvert.ignorePrimitiveChecks = false;
      this.jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL;
    }

    public mapAPI(apiData: IVehicleCTO): IVehicleCTO {
      this.setConfig(DebugMode.DISABLE);

      let vehicleData: GetVehicleMapper;
      try {
        vehicleData = this.jsonConvert.deserializeObject(apiData, GetVehicleMapper);

        return vehicleData;
      } catch (e) {
        this.errorHandlerService.handleError(Utils.makeErrorPayload(ApiConstant.GETVEHICLE, e.message));
      }
    }
}

