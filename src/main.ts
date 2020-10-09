import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import {LicenseManager} from '@ag-grid-enterprise/core';

if (environment.production) {
  enableProdMode();
}

if (sessionStorage.getItem('nw_auth') === 'complete') {
  doBootstrap();
}
// else set a document listener for the following event
document.addEventListener('nw_auth', async () => {
  await doBootstrap();
});

LicenseManager.setLicenseKey('CompanyName=SHI International Corp_on_behalf_of_KAR Auction Services,LicensedApplication=Enterprise Checkout,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=3,LicensedProductionInstancesCount=1,AssetReference=AG-009979,ExpiryDate=26_August_2021_[v2]_MTYyOTkzMjQwMDAwMA==7b07bbc1760e43ffc06fbfa1f94ec624');
async function doBootstrap() {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
}
