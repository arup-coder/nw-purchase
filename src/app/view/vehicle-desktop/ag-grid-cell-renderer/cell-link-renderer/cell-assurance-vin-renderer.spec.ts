import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { ICellRendererParams } from 'ag-grid-community';
import { CellAssuranceVinRenderer } from './cell-assurance-vin-renderer';

describe('CellAssuranceVinRenderer', () => {
    let component: CellAssuranceVinRenderer;
    let fixture: ComponentFixture<CellAssuranceVinRenderer>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CellAssuranceVinRenderer],
            providers: [HttpClient, HttpHandler],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CellAssuranceVinRenderer);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
      });

    it('should call agInit and assign value to params', () => {
        const fakeData = {} as ICellRendererParams;
        fakeData.data = {
            auctionChannelValue: null
        };
        component.agInit(fakeData);
        expect(component.params).toEqual(fakeData);
    });

    it('should call refresh', () => {
        const result = component.refresh({} as ICellRendererParams);
        expect(result).toEqual(true);
    });
});
