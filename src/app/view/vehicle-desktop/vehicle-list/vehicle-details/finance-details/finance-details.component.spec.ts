import { HttpClient, HttpHandler } from '@angular/common/http';
import {SharedModule} from './../../../../../shared/shared.module';
import {CurrencyPipe} from '@angular/common';
import {VehicleConfigService} from './../../vehicle-config';
import {FinanceDetailsComponent} from './finance-details.component';
import {VehiclesMockData} from '../../../../../mock/mock-data';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SimpleChanges, SimpleChange} from '@angular/core';
import { EnvironmentService } from './../../../../../shared/services/environment-config';

describe('FinanceDetailsComponent', () => {
  let component: FinanceDetailsComponent;
  let fixture: ComponentFixture<FinanceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceDetailsComponent],
      providers: [VehicleConfigService, CurrencyPipe, EnvironmentService, HttpClient, HttpHandler],
      imports: [SharedModule],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should change value of input variable data while value is changing in parent', () => {
    expect(component.data).toBeNull();

    const nextData = VehiclesMockData[0];

    const mockChange = {
      data: {
        previousValue: undefined,
        currentValue: nextData,
        firstChange: true,
      },
    };

    const mockChanges: SimpleChanges = {
      data: new SimpleChange(mockChange.data.previousValue, mockChange.data.currentValue, mockChange.data.firstChange),
    };

    component.ngOnChanges(mockChanges);

    expect(JSON.stringify(component.data)).toBe(JSON.stringify(VehiclesMockData[0]));

    component.data = null;

    const change = {
      data: {
        previousValue: undefined,
        currentValue: undefined,
        firstChange: true,
      },
    };

    const changes: SimpleChanges = {
      data: new SimpleChange(change.data.previousValue, change.data.currentValue, change.data.firstChange),
    };

    component.ngOnChanges(changes);
  });

  it('should change value of input variable idUniqueField while value is changing in parent', () => {
    expect(component.idUniqueField).toEqual(null);

    const nextData = 'vin';

    const mockChange = {
      idUniqueField: {
        previousValue: undefined,
        currentValue: nextData,
        firstChange: true,
      },
    };

    const mockChanges: SimpleChanges = {
      idUniqueField: new SimpleChange(mockChange.idUniqueField.previousValue,
          mockChange.idUniqueField.currentValue, mockChange.idUniqueField.firstChange),
    };

    component.ngOnChanges(mockChanges);

    expect(component.idUniqueField).toBe('vin');

    component.idUniqueField = null;

    const change = {
      idUniqueField: {
        previousValue: undefined,
        currentValue: undefined,
        firstChange: true,
      },
    };

    const changes: SimpleChanges = {
      idUniqueField: new SimpleChange(change.idUniqueField.previousValue,
          change.idUniqueField.currentValue, change.idUniqueField.firstChange),
    };

    component.ngOnChanges(changes);

    expect(component.idUniqueField).toBe(null);
  });

  it('should return all 3 parameters for non FEES column', () => {
    const id = 'dummy';
    const lineItemDescription = 'description';
    const name = 'nonFees';
    const result = component.getCellId(id, lineItemDescription, name);
    expect(result).toBe('dummy_description_nonFees');
  });

  it('should return id and lineItemDescription for FEES column', () => {
    const id = 'dummy';
    const lineItemDescription = 'description';
    const name = 'FEES';
    const result = component.getCellId(id, lineItemDescription, name);
    expect(result).toBe('dummy_description');
  });


  it('should change value of input variable data and set lineItems as empty array', () => {
    expect(component.data).toBeNull();
    const nextData = {
      vin: 'abc',
      trim: 'xyz',
    };
    const mockChange = {
      data: {
        previousValue: undefined,
        currentValue: nextData,
        firstChange: true,
      },
    };
    const mockChanges: SimpleChanges = {
      data: new SimpleChange(mockChange.data.previousValue, mockChange.data.currentValue, mockChange.data.firstChange),
    };
    component.ngOnChanges(mockChanges);
    expect(component.lineItems).toEqual([]);
  });

  it('should set columns', () => {
    component.ngOnInit();
    expect(component.columns).toBeTruthy();
  });

  it('should return id and lineItemDescription for FEES column', () => {
    const id = 'dummy';
    const lineItemDescription = 'description description';
    const name = 'FEES';
    const result = component.getCellId(id, lineItemDescription, name);
    expect(result).toBe('dummy_description-description');
  });
});
