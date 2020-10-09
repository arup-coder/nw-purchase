import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PaginationComponent} from './ag-grid-pagination.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {PagerService} from 'src/app/shared/services/pager.service';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent],
      providers: [HttpClient, HttpHandler, PagerService],

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('goToPrevious', () => {
    const pageService = TestBed.get(PagerService);
    const event = spyOn(pageService, 'getPrevPageSet').and.callThrough();
    component.goToPrevious();
    expect(event).toBeDefined();
  });


  it('getFirstPage', () => {
    const index = 0;
    const pageService = TestBed.get(PagerService);
    const event = spyOn(pageService, 'getFirstPage').and.callThrough();
    component.getFirstPage(index);
    expect(event).toBeDefined();
  });


  it('goToPrevious', () => {
    const pageService = TestBed.get(PagerService);
    const event = spyOn(pageService, 'getPrevPageSet').and.callThrough();
    component.goToPrevious();
    expect(event).toBeDefined();
  });


  it('goToNext', () => {
    const pageService = TestBed.get(PagerService);
    const event = spyOn(pageService, 'getNextPageSet').and.callThrough();
    component.goToNext();
    expect(event).toBeDefined();
  });

  
  it('getLastPage', () => {
    const pageService = TestBed.get(PagerService);
    const event = spyOn(pageService, 'getLastPage').and.callThrough();
    component.goToNext();
    expect(event).toBeDefined();
  });

  
});
