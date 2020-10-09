import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BlankstateComponent} from './blankstate.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {ExternalNavigationService} from 'src/app/shared/services/external-navigation.service';

describe('BlankstateComponent', () => {
  let component: BlankstateComponent;
  let fixture: ComponentFixture<BlankstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlankstateComponent],
      providers: [HttpClient, HttpHandler, ExternalNavigationService],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankstateComponent);
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
