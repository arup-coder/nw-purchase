import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {HttpHandler, HttpClient} from '@angular/common/http';
import {ICellRendererParams, GridApi, RowNode} from 'ag-grid-community';
import { CellTreeTogglerAllRenderer } from './cell-tree-toggler-all-renderer';

describe('CellLinkRenderer', () => {
  let component: CellTreeTogglerAllRenderer;
  let fixture: ComponentFixture<CellTreeTogglerAllRenderer>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CellTreeTogglerAllRenderer],
      providers: [HttpClient, HttpHandler],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellTreeTogglerAllRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  afterEach(() => {
    fixture.destroy();
  });
  it('should call agInit and assign value to data', () => {
    const fakeData = {} as ICellRendererParams;
    component.agInit(fakeData);
    expect(component.params).toEqual(fakeData);
  });

  it('should call refresh', () => {
    const result = component.refresh({} as ICellRendererParams);
    expect(result).toEqual(true);
  });
  it('should call toggle and collapse', () => {
    component.params = {} as ICellRendererParams;
    component.params['parentCallBack'] = () => {};
    component.params['api'] = {} as GridApi;
    component.expanded = false;
    const rowNode = {} as RowNode;
    rowNode['childIndex'] = 1;
    rowNode['expanded'] = false;
    rowNode['setExpanded'] = (val) => {

    };
    component.params['api'].paginationGetPageSize = () => {
                return 25;
    };
    component.params['api'].paginationGetCurrentPage = () => {
        return 0;
    };
    component.params['api'].forEachNode = (cb) => {
      cb(rowNode, null);
    };
    component.params['api'].forEachNodeAfterFilterAndSort  = (cb) => {
      cb(rowNode, null);
    };
    component.params['api'].onGroupExpandedOrCollapsed = () => {
    };
    component.toggle();
    expect(component.expanded).toEqual(true);
    rowNode['expanded'] = true;
    component.collapseAll(false);
    expect(component.expanded).toEqual(false);
  });

  it('Should follow else path for toggle and collapse', () => {
    component.params = {} as ICellRendererParams;
    component.params['parentCallBack'] = () => {};
    component.params['api'] = {} as GridApi;
    component.expanded = false;
    const rowNode = {} as RowNode;
    rowNode['childIndex'] = 1;
    rowNode['expanded'] = false;
    rowNode['setExpanded'] = (val) => {

    };
    component.params['api'].paginationGetPageSize = () => {
                return 25;
    };
    component.params['api'].paginationGetCurrentPage = () => {
        return 1;
    };
    
    component.params['api'].forEachNode = (cb) => {
      cb(rowNode, null);
    };
    component.params['api'].forEachNodeAfterFilterAndSort  = (cb) => {
      cb(rowNode, null);
    };
    component.params['api'].onGroupExpandedOrCollapsed = () => {
    };

    component.toggle();
    expect(component.expanded).toEqual(true);
    component.collapseAll(false);
    expect(component.expanded).toEqual(false);
  });
});
