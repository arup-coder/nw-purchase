import {TestBed, ComponentFixture} from '@angular/core/testing';
import {LoadModuleDirective} from './load-module.directive';
import {Component, DebugElement, ViewContainerRef, Injector, NgModuleFactoryLoader} from '@angular/core';
import {By} from '@angular/platform-browser';
import {LAZY_MODULES_MAP, LAZY_MODULES} from '../services/lazy-module-factory.map';

@Component({
  template: `<div loadModule="mobile"></div>`,
})

class TestComponent {
}

describe('Directive: LoadModuleDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let divEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [TestComponent, LoadModuleDirective],
      providers: [NgModuleFactoryLoader, ViewContainerRef],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    divEl = fixture.debugElement.query(By.css('div'));
  });

  it('should create an instance', () => {
    const vcr = TestBed.get(ViewContainerRef) as ViewContainerRef;
    const injector = TestBed.get(Injector) as Injector;
    const loader = TestBed.get(NgModuleFactoryLoader) as NgModuleFactoryLoader;
    const modulesMap = TestBed.get(LAZY_MODULES_MAP) as LAZY_MODULES;
    const directive = new LoadModuleDirective(vcr, injector, loader, modulesMap);
    expect(directive).toBeTruthy();
  });
});
