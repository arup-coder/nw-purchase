import {BrowserModule} from '@angular/platform-browser';
import {NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  APP_INITIALIZER,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader,
  DoBootstrap,
  Injector,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EnvironmentService} from './shared/services/environment-config';
import {AppComponent} from './app.component';
import {CoreModule} from './view/core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {createCustomElement} from '@angular/elements';
import { IntercomModule } from 'ng-intercom';

export function loadConfigurations(envService: EnvironmentService) {
  return () => envService.loadConfigs();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    IntercomModule.forRoot({
      appId: 'jjy9q9c8' })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfigurations,
      deps: [EnvironmentService],
      multi: true,
    },
    {
      provide: NgModuleFactoryLoader,
      useClass: SystemJsNgModuleLoader,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent],
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
      // Pacakge Angular component with injector
      const nwPurchasesWebComponent = createCustomElement(AppComponent, {injector: this.injector});
      // Register web component.
      customElements.define('nw-root', nwPurchasesWebComponent);
  }
}
