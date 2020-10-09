import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { ICellRendererParams } from 'ag-grid-community';
import { PaymentStatus, PaymentStatusUi } from 'src/app/shared/enums/enum';
import { CellPaymentStatuslRenderer } from './cell-payment-status-rendrer';


describe('CellPaymentStatuslRenderer', () => {
    let component: CellPaymentStatuslRenderer;
    let fixture: ComponentFixture<CellPaymentStatuslRenderer>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CellPaymentStatuslRenderer],
            providers: [HttpClient, HttpHandler],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CellPaymentStatuslRenderer);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
      });

      it('should call agInit and assign value to data DUE', () => {
        const fakeData = {} as ICellRendererParams;
        fakeData.data = {
            paymentStatus: PaymentStatus.DUE
        };
        component.agInit(fakeData);
        expect(component.status).toEqual(PaymentStatusUi.DUE);
    });

    it('should call agInit and assign value to data PAID', () => {
        const fakeData = {} as ICellRendererParams;
        fakeData.data = {
            paymentStatus: PaymentStatus.PAID
        };
        component.agInit(fakeData);
        expect(component.status).toEqual(PaymentStatusUi.PAID);
    });

    it('should call agInit and assign value to data VOID', () => {
        const fakeData = {} as ICellRendererParams;
        fakeData.data = {
            paymentStatus: PaymentStatus.VOID
        };
        component.agInit(fakeData);
        expect(component.status).toEqual(PaymentStatusUi.VOID);
    });

    it('should call agInit and assign value to data VOIDFEESDUE', () => {
        const fakeData = {} as ICellRendererParams;
        fakeData.data = {
            paymentStatus: PaymentStatus.VOIDFEESDUE
        };
        component.agInit(fakeData);
        expect(component.status).toEqual(PaymentStatusUi.VOIDFEESDUE);
    });

    it('should call agInit and assign value to data ABC', () => {
        const fakeData = {} as ICellRendererParams;
        fakeData.data = {
            paymentStatus: 'ABC'
        };
        component.agInit(fakeData);
        expect(component.status).toEqual('');
    });

    it('should call agInit and assign value to data NULL', () => {
        const fakeData = {} as ICellRendererParams;
        fakeData.data = {
            paymentStatus: null
        };
        component.agInit(fakeData);
        expect(component.status).toEqual('');
    });

    it('should call refresh', () => {
        const result = component.refresh({} as ICellRendererParams);
        expect(result).toEqual(true);
    });

});    
