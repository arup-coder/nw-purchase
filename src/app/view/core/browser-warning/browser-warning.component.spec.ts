import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {ExternalNavigationService} from 'src/app/shared/services/external-navigation.service';
import { BrowserWarningComponent } from './browser-warning.component';


describe('BrowserWarningComponent', () => {
  let component: BrowserWarningComponent;
  let fixture: ComponentFixture<BrowserWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrowserWarningComponent],
      providers: [HttpClient, HttpHandler, ExternalNavigationService],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
