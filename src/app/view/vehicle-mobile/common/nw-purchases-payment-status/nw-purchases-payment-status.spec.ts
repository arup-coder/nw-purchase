import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { PaymentStatusComponent } from './nw-purchases-payment-status';


describe('PaymentStatusComponent', () => {
    let component: PaymentStatusComponent;
    let fixture: ComponentFixture<PaymentStatusComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PaymentStatusComponent],
            providers: [HttpClient, HttpHandler],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PaymentStatusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
    });
});
