import {
  Directive,
  OnDestroy,
  NgModuleFactory,
  Inject,
  ViewContainerRef,
  Injector,
  NgModuleFactoryLoader,
  NgModuleRef,
  Input,
  Type,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import {LAZY_MODULES, LAZY_MODULES_MAP} from '../services/lazy-module-factory.map';
import {AutoUnSubscribe} from '../decorators/custome.decorators';

@Directive({
  selector: '[loadModule]',
})
@AutoUnSubscribe()
export class LoadModuleDirective implements OnChanges, OnDestroy {
    @Input('loadModule') moduleName: keyof LAZY_MODULES;
    @Output('onModuleLoaded') moduleRefEvent: EventEmitter<{ homeRef: ViewContainerRef }> = new EventEmitter();
    private moduleRef: NgModuleRef<any>;

    constructor(
        private vcr: ViewContainerRef,
        private injector: Injector,
        private loader: NgModuleFactoryLoader,
        @Inject(LAZY_MODULES_MAP) private modulesMap,
    ) {

    }

    ngOnChanges() {
      this.loader
          .load(this.modulesMap[this.moduleName])
          .then((moduleFactory: NgModuleFactory<any>) => {
            this.moduleRef = moduleFactory.create(this.injector);
            const rootComponent = (moduleFactory.moduleType as ModuleWithRoot)
                .rootComponent;

            const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(
                rootComponent,
            );

            this.vcr.createComponent(factory);
            this.moduleRefEvent.emit({homeRef: this.vcr});
          });
    }

    ngOnDestroy() {

    }
}

type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };
