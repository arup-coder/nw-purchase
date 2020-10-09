import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {HttpHandler, HttpClient} from '@angular/common/http';
import { CellTreeTogglerRenderer } from './cell-tree-toggler-renderer';
import {ICellRendererParams} from 'ag-grid-community';

describe('CellLinkRenderer', () => {
  let component: CellTreeTogglerRenderer;
  let fixture: ComponentFixture<CellTreeTogglerRenderer>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CellTreeTogglerRenderer],
      providers: [HttpClient, HttpHandler],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellTreeTogglerRenderer);
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
});
