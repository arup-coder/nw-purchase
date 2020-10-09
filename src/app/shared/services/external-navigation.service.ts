import {Injectable} from '@angular/core';
import {EnvironmentService} from './environment-config';

// Need to change it to feature module
@Injectable({
  providedIn: 'root',
})
export class ExternalNavigationService {
  public buyerOaUrl: string;
  public newWaveBaseUrl: string;
  private service = 'nwPurchases';
  private userPreferences;

  constructor(private envProps: EnvironmentService) {
    this.initUrlConfig();
  }

  private initUrlConfig() {
    const config = this.envProps.configurations;
    if (config && config.interfacePath && config.interfacePath.buyerOa) {
      this.buyerOaUrl = this.envProps.configurations.interfacePath.buyerOa;
    }
    if (config && config.domains && config.domains.nw) {
      this.newWaveBaseUrl = this.envProps.configurations.domains.nw;
    }
    this.userPreferences = JSON.parse(sessionStorage.getItem('userPreferences'));
  }

  getVdpLink(originVid: string, nwVehicleId: string) {
    const classicVdpLink = (this.buyerOaUrl) ? `${this.buyerOaUrl}/detail.html?vehicleId=${originVid}&from=${this.service}` : null;
    // const nwVdpLink = `/mfe/vdp?vehicleId=${nwVehicleId}`;
    if (classicVdpLink) {
      return classicVdpLink;
    }
  }

  getETRVdpLink(vdpLink: string) {
    const classicVdpLink = (this.newWaveBaseUrl) ? `${this.newWaveBaseUrl}${vdpLink}` : null;
    if (classicVdpLink) {
      return classicVdpLink;
    }
  }

  getSearchPageLink(): string {
    return `${this.newWaveBaseUrl}/mfe/search`;
  }
}
