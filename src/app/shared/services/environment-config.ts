import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

type EnvironmentType = typeof import('../../../assets/environments/localhost.json');

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  configurations: EnvironmentType = {} as EnvironmentType;

  constructor(private http: HttpClient) { }

  async loadConfigs() {
    return this.http
        .get(this.getURL(window.location))
        .pipe(
            tap((config) => {
              this.configurations = config as EnvironmentType;
            }),
        )
        .toPromise();
  }

  getURL({hostname, pathname}: Location) {
    const path = pathname === '/' ? '' : pathname.replace(/^\/mfe\//, '/apps/');
    const envUrl = `${path}/assets/environments/${hostname}.json`;

    return envUrl;
  }
}
