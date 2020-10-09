import {CalendarModule, CheckboxModule, AccordionModule} from '@nw/nw-component-library';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FilterLeftComponent} from './filter-left.component';
import {FormsModule} from '@angular/forms';
import { dateFilterRange } from 'src/app/shared/enums/enum';
import { DaterangepickerComponent, NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { Component, ViewChild } from '@angular/core';
import { IFilterConfig } from 'src/app/shared/custom_types/custom.types';
import { FilterState } from 'src/app/data-store/models/filter.model';
import * as moment from 'moment';

@Component({
  template: `<nw-purchases-filter-left #filter [newFilter]=[newFilter] [config]="filtersConfig"
  (filterEmitted)="filterOutputEventHandler($event)"></nw-purchases-filter-left>`,
})

class TestComponent {
   dummy = [{
    options: [
      {
        title: 'Today',
        count: 0,
      },
      {
        title: 'Yesterday',
        count: 0,
      },
      {
        title: 'Last 7 Days',
        count: 0,
      },
      {
        title: 'Last 30 Days',
        count: 0,
      },
      {
        title: 'Last 90 Days'
      },
      {
        title: 'Custom Date Range'
      }],
    type: 'date',
    heading: 'Sale Date',
    name: 'soldDateMMDDYY',
    id: 'saleDate',
    isExpandedByDefault: true
  }];
  public filtersConfig = this.dummy;
  public newFilter = {};

  public _filterLeftComponent: FilterLeftComponent;
  @ViewChild('filter', { static: true })
  set filter(filter: FilterLeftComponent | null) {
    if (!filter) {
      return;
   } else {
     this._filterLeftComponent = filter;
   }
  }
  get filterLeftComponent(): FilterLeftComponent {
    return this._filterLeftComponent;
  }
}

describe('FilterLeftComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterLeftComponent,
        TestComponent],
      imports: [BrowserAnimationsModule, CalendarModule, CheckboxModule, AccordionModule, FormsModule,  NgxDaterangepickerMd.forRoot()],
      providers: []
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test addCount', () => {
    const dummyLabel = dateFilterRange.lastThirtyDays;
    const result = component.filterLeftComponent.addCount(dummyLabel);
    expect(result).toBe('Last 30 Days (0)');
  });

  it('should test removeCount', () => {
    const dummyLabel = 'Last 30 Days (0)';
    const result = component.filterLeftComponent.removeCount(dummyLabel);
    expect(result).toBe('Last 30 Days');
  });

  it('should test getLabel', () => {
    const dummyLabel = 'Last 30 Days';
    const result = component.filterLeftComponent.getLabel(dummyLabel, 0);
    expect(result).toBe('Last 30 Days (0)');
  });

  xit('should test updateDateLablesCount', () => {
    const dummyOptionsCount = [{title: 'Last 30 Days', count: 20}];
    component.filterLeftComponent.updateDateLablesCount(dummyOptionsCount);
    const rangesResult = {
      'Last 30 Days (20)' : [moment().subtract(29, 'days'), moment()]
    };
    expect(component.filterLeftComponent.ranges).toEqual(rangesResult);
  });

  xit('should test chosenDateTime', () => {
    const dummyRow = [{
      options: [
        {
          title: 'Today',
          count: 0,
        },
        {
          title: 'Yesterday',
          count: 16,
        },
        {
          title: 'Last 7 Days',
          count: 0,
        },
        {
          title: 'Last 30 Days',
          count: 0,
        },
        {
          title: 'Last 90 Days'
        },
        {
          title: 'Custom Date Range'
        }],
      type: 'date',
      heading: 'Sale Date',
      name: 'soldDateMMDDYY',
      id: 'saleDate',
      isExpandedByDefault: true
    }];
    const dummyEvent = {
      endDate: moment().subtract(1, 'days'),
      startDate: moment().subtract(1, 'days')
    };
    component.filterLeftComponent.chosenDateTime(dummyRow, dummyEvent);
    expect(component.filterLeftComponent.selectedFilters.saleDate).toEqual('Yesterday');
  });
});