import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EnvironmentService} from '../shared/services/environment-config';
import {CoreModule} from '../view/core/core.module';

@Injectable({
  providedIn: CoreModule,
})
export class CommonApi {
  constructor(
    private http: HttpClient,
    private service: EnvironmentService,
  ) { }

  getVehiclesCount(): Observable<any> {
    let apiUrl = '';
    try {
      const purchase = this.service.configurations.purchase;
      if (purchase.vehicleCount !== undefined && purchase.vehicleCount != null) {
        apiUrl = purchase.vehicleCount;
      }
    } catch {
      apiUrl = '';
    }

    return this.http.get<any>(apiUrl);
  }

  getUpdatedVehicleCount(): Observable<any> {
    let apiUrl = '';
    try {
      const purchase = this.service.configurations.purchase;
      if (purchase.updatedVehiclesCount !== undefined && purchase.updatedVehiclesCount != null) {
        apiUrl = purchase.updatedVehiclesCount;
      }
    } catch {
      apiUrl = '';
    }

    return this.http.get<any>(apiUrl);
  }
}
