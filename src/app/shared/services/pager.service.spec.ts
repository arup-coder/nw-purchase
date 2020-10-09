import {TestBed} from '@angular/core/testing';
import {PagerService} from './pager.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ErrorHandlerService', () => {
  let pageService: PagerService;
  let pageSize = 10;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });
    pageService = new PagerService();
  });

  it('should create service', () => {
    expect(pageService).toBeDefined();
  });


  it('getPager', () => {
    const totalPages = 18;
    const currentPage = 0;

    const result = pageService.getPager(totalPages, currentPage);
    expect(result.startPage).toEqual(1);
    expect(result.endPage).toEqual(10);
  });

  it('getNextPageSet', () => {
    const totalPages = 18;
    const currentPage = 0;
    const startPage = 1;
    const endPage = 10;

    const result = pageService.getNextPageSet(totalPages, currentPage, startPage, endPage);
    expect(result.startPage).toEqual(11);
    expect(result.endPage).toEqual(18);
  });

  it('getPrevPageSet', () => {
    const totalPages = 18;
    const currentPage = 0;
    const startPage = 11;
    const endPage = 18;

    const result = pageService.getPrevPageSet(totalPages, currentPage, startPage, endPage);
    expect(result.startPage).toEqual(1);
    expect(result.endPage).toEqual(10);
  });

  it('getFirstPage', () => {
    const totalPages = 4;
    const currentPage = 4;
    const startPage = 1;
    const endPage = 4;

    const result = pageService.getFirstPage(totalPages, currentPage, startPage, endPage);
    expect(result.currentPage).toEqual(0);
  });

  it('getLastPage', () => {
    const totalPages = 4;
    const currentPage = 0;
    const startPage = 1;
    const endPage = 4;

    const result = pageService.getLastPage(totalPages, currentPage, startPage, endPage);
    expect(result.currentPage).toEqual(3);
  });

  it('Total Pages is greater then PazeSize getLastPage ', () => {
    const totalPages = 39;
    const result = pageService.getLastPage(totalPages, 0, 0, 0);
    expect(result.startPage).toEqual(31);
    expect(result.endPage).toEqual(39);
    expect(result.currentPage).toEqual(38);
  });

});

