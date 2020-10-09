import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArbitrationStatusComponent} from './arbitration-status.component';

describe('ArbitrationStatusComponent', () => {
  let component: ArbitrationStatusComponent;
  let fixture: ComponentFixture<ArbitrationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArbitrationStatusComponent],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitrationStatusComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
