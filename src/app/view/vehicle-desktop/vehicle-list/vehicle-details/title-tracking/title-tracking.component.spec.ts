
import {async, TestBed} from '@angular/core/testing';
import {TitleTrackingComponent} from './title-tracking.component';


describe('TitleTrackingComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TitleTrackingComponent],
    })
        .compileComponents();
  }));

  it('should create instance of TitleTrackingComponent', () => {
     const component =  new TitleTrackingComponent();
  });
});
