import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { ICellRendererParams } from 'ag-grid-community';
import { CellSalesChannelRenderer } from './cell-sales-channel-renderer';
import { SalesChannel } from 'src/app/shared/enums/enum';

describe('CellSalesChannelRenderer', () => {
    let component: CellSalesChannelRenderer;
    let fixture: ComponentFixture<CellSalesChannelRenderer>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CellSalesChannelRenderer],
            providers: [HttpClient, HttpHandler],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CellSalesChannelRenderer);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
      });

    it('should call agInit and assign value to data SIMULCAST', () => {
        const fakeData = {} as ICellRendererParams;
        fakeData.data = {
            auctionChannelValue: 'SIMULCAST'
        };
        component.agInit(fakeData);
        expect(component.salesChannelText).toEqual(SalesChannel.SIMULCAST_UI);
    });

    it('should call agInit and assign value to data DEALERBLOCK', () => {
        const fakeData = {} as ICellRendererParams;
        fakeData.data = {
            auctionChannelValue: 'DEALERBLOCK'
        };
        component.agInit(fakeData);
        expect(component.salesChannelText).toEqual(SalesChannel.DEALERBLOCK_UI);
    });

    it('should call agInit and assign value to data INLANE', () => {
        const fakeData = {} as ICellRendererParams;
        fakeData.data = {
            auctionChannelValue: 'INLANE'
        };
        component.agInit(fakeData);
        expect(component.salesChannelText).toEqual(SalesChannel.INLANE_UI);
    });

    it('should call agInit and assign value to data TRADEREV', () => {
        const fakeData = {} as ICellRendererParams;
        fakeData.data = {
            auctionChannelValue: 'TRADEREV'
        };
        component.agInit(fakeData);
        expect(component.salesChannelText).toEqual('');
    });

    it('should call agInit and assign value to data', () => {
        const fakeData = {} as ICellRendererParams;
        fakeData.data = {
            auctionChannelValue: null
        };
        component.agInit(fakeData);
        expect(component.salesChannelText).toEqual('');
    });

    it('should call agInit and assign value to data', () => {
        const fakeData = {} as ICellRendererParams;
        fakeData.data = {
            auctionChannelValue: 'abc'
        };
        component.agInit(fakeData);
        expect(component.salesChannelText).toEqual('');
    });

    it('should call refresh', () => {
        const result = component.refresh({} as ICellRendererParams);
        expect(result).toEqual(true);
    });
});
