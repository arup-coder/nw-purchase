import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {CellLinkRenderer} from './cell-link-renderer';
import {ExternalNavigationService} from 'src/app/shared/services/external-navigation.service';
import {HttpHandler, HttpClient} from '@angular/common/http';
import { ICellRendererParams } from 'ag-grid-community';

describe('CellLinkRenderer', () => {
  let component: CellLinkRenderer;
  let fixture: ComponentFixture<CellLinkRenderer>;
  let extService: ExternalNavigationService;

  const mockExtservice = {
    getETRVdpLink: (vdpLink) => {
      return '/';
    },
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CellLinkRenderer],
      providers: [HttpClient, HttpHandler, ExternalNavigationService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellLinkRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call agInit and Check if Params is not undefined', () => {
    const fakeData = {} as ICellRendererParams;
    fakeData.colDef ={
      cellRendererParams: "link"
    }

    fakeData.data = {
      vehicleTitle: 'sample',
      vdpLink:'sample_link'
    };
    component.agInit(fakeData);
    expect(component.type).not.toEqual("");
});

  it('should not call getETRVdpLink Called', () => {
    const vdpLink = 'test';
    extService = TestBed.get(ExternalNavigationService);
    spyOn(extService, 'getETRVdpLink').and.callFake(mockExtservice.getETRVdpLink);
    component.formatTheLink();
    expect(extService.getETRVdpLink).not.toHaveBeenCalledWith(vdpLink);
  });

  
  it('should call refresh', () => {
    const fakeData = {} as ICellRendererParams;
    fakeData.data = {
      vehicleTitle: 'sample',
      vdpLink:'sample_link'
    };
    const result = component.refresh(fakeData);
    expect(result).toEqual(true);
});

});
