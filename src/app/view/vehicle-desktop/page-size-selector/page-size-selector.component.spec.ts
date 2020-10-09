import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PageSizeSelectorComponent} from './page-size-selector.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

describe('PageSizeSelectorComponent', () => {
  let component: PageSizeSelectorComponent;
  let fixture: ComponentFixture<PageSizeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageSizeSelectorComponent],
      providers: [HttpClient, HttpHandler],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSizeSelectorComponent);
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
