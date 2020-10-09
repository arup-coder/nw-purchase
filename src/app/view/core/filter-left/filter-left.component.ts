import { ViewActions } from './../../../abstract-actions/view.actions';
import { GLOBAL_SETTINGS } from './../../../shared/global-config';
import { StoreService } from './../../../data-store/store';
import { IFilterStateKeys } from './../../../data-store/models/filter.model';
import { Checkbox } from '@nw/nw-component-library';
import { Component, Output, EventEmitter, OnChanges, Input, ViewChildren, ViewChild, QueryList, OnInit } from '@angular/core';
import { FILTER_ARIA_LABELS } from './filter.labels';
import { IFilterState } from 'src/app/data-store/models/filter.model';
import * as moment from 'moment';
import Utils from 'src/app/shared/utils/utils';
import { IFilterConfig } from 'src/app/shared/custom_types/custom.types';
import { DaterangepickerComponent } from 'ngx-daterangepicker-material';
import {FilterState} from './../../../data-store/models/filter.model';
import { dateFilterRange } from 'src/app/shared/enums/enum';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'nw-purchases-filter-left',
  templateUrl: './filter-left.component.html',
  styleUrls: ['./filter-left.component.scss'],
})

export class FilterLeftComponent implements OnChanges, OnInit {
  @ViewChildren(Checkbox) CheckboxRef: QueryList<Checkbox>;

  @Input() config: IFilterConfig[];
  @Input() newFilter;


  readonly filterAriaLabels = FILTER_ARIA_LABELS;
  @Output() filterEmitted: EventEmitter<Partial<IFilterState>> = new EventEmitter<Partial<IFilterState>>();
  selectedFilters = {} as IFilterState;
  public errors: any = {};
  public dateRangeMinDate: moment.Moment;
  public dateRangeMaxDate: moment.Moment;
  public selectedDate: any;
  public ranges = {};
  private readonly filterKeys = Object.keys(new FilterState());
  public hideCalenderSelected = false;
  private _pickerDirective: DaterangepickerComponent;
  public expandIcon = 'mi mi-expand-less';
  public resetFiltersImg = GLOBAL_SETTINGS.resetFiltersImg;

  constructor(private readonly storeService: StoreService, private viewActions: ViewActions) {}

  @ViewChild('pickerDirective', { static: false }) set pickerDirective(picker: DaterangepickerComponent | null) {
    if (!picker) {
      return;
    } else if (this.selectedFilters && this.selectedFilters.saleDate && this.selectedFilters.saleDate[0]
      && this.selectedFilters.saleDate[0].length > 0 && this.config && !this.selectedFilters.saleDate[0].includes('-')) {
      picker.chosenRange = `${this.addCount(this.selectedFilters.saleDate[0])}`;
      picker.clickRange('event', `${this.addCount(this.selectedFilters.saleDate[0])}`);
    } else if (this.selectedFilters && this.selectedFilters.saleDate && this.selectedFilters.saleDate[0]
      && this.selectedFilters.saleDate[0].length > 0 && this.config && this.selectedFilters.saleDate[0].includes('-')) {
      const startDate = moment(this.selectedFilters.saleDate[0].split(' - ')[0]);
      const endDate = moment(this.selectedFilters.saleDate[0].split(' - ')[1]);

      picker.setStartDate(startDate);
      picker.setEndDate(endDate);
      picker.updateCalendars();
    }
    this._pickerDirective = picker;
    this.addPickerIds();
  }
  get pickerDirective(): DaterangepickerComponent {
    return this._pickerDirective;
  }

  addPickerIds() {
    const datePickerEl = document.getElementsByClassName('ranges');
    const list = datePickerEl[0].children[0].children;
    Array.from(list).forEach(item => {
      item.id = 'filter_saleDate_' + item.textContent.replace(/ +\(.*$/g, '').replace(/ /g, '-');
    });
  }

  chosenDateTime(row, event): void {
    if (event.startDate && event.endDate) {
      const inlineDateTime = event;
      const startDateSelected = inlineDateTime.startDate.format('MM/DD/YY');
      const endDateSelected = inlineDateTime.endDate.format('MM/DD/YY');
      let chosenSaleDateRange = '';
      if (this.pickerDirective) {
        if (this.pickerDirective.chosenRange === 'Custom range') {
          this.hideCalenderSelected = true;
          chosenSaleDateRange = `${startDateSelected} - ${endDateSelected}`;
        } else {
          chosenSaleDateRange = this.removeCount(this.pickerDirective.chosenRange);
        }
        this.pickerDirective.updateCalendars();
      } else {
        chosenSaleDateRange = this.selectedFilters.saleDate[0];
      }
      this.selectedFilters[row.id] = [chosenSaleDateRange];
      this.filterSelectionChanged(row, chosenSaleDateRange);
    }

  }

  resetCalenderFlag(event): void {
    this.hideCalenderSelected = false;
  }

  ngOnChanges(change) {
    if ('config' in change && typeof change.config.currentValue !== 'undefined') {
      this.config = change.config.currentValue;
      this.config.forEach((row) => {
        if (row.type === 'input' && !this.selectedFilters[row.id]) {
          this.selectedFilters[row.id] = '';
        }
        if (row.type !== 'input' && !this.selectedFilters[row.id]) {
          this.selectedFilters[row.id] = [];
        }
        if (row.type !== 'input' && this.selectedFilters[row.id] && this.selectedFilters[row.id].indexOf('All') !== -1) {
          row.options.forEach((option) => {
            if (this.selectedFilters[row.id].indexOf(option.title) === -1) {
              this.selectedFilters[row.id].push(option.title);
              this.updateValues(row.id);
            }
          });
        }
        if (row.type === 'date' && this.selectedFilters[row.id]) {
          this.updateDateLablesCount(row.options);
        }
      });
      this.updateCheckbox();
      this.getFiltersState();
    }
  }

  ngOnInit() {
    this.setMinAndMaxDate();
  }

  filterSelectionChanged(row, value?: string) {
    if (row.validation && this.selectedFilters[row.id].length > 0 && this.selectedFilters[row.id].length < row.validation.minLength) {
      this.errors[row.id] = true;
    } else {
      const filterData = {};

      if (this.errors[row.id]) {
        delete this.errors[row.id];
      }

      if (row.type === 'date' && this.selectedFilters[row.id].length > 0) {
        this.selectedFilters[row.id] = [value];
        filterData[row.id] = this.selectedFilters[row.id];
      } else if (row.type !== 'input' && (this.selectedFilters[row.id].indexOf('All') === -1 && value && value === 'All')) {
        filterData[row.id] = [];
        this.selectedFilters[row.id] = [];
        this.updateCheckbox();
      } else if (row.type !== 'input' && (this.selectedFilters[row.id].indexOf('All') !== -1 && value && value !== 'All')) {
        const index = this.selectedFilters[row.id].indexOf('All');
        this.selectedFilters[row.id].splice(index, 1);
        filterData[row.id] = this.selectedFilters[row.id];
        this.updateCheckbox();
      } else if (row.type !== 'input' && (this.selectedFilters[row.id].indexOf('All') !== -1 && value && value === 'All') ||
        (row.options && (this.selectedFilters[row.id].length === (row.options.length - 1)))) {
        row.options.forEach((option) => {
          if (this.selectedFilters[row.id].indexOf(option.title) === -1) {
            this.selectedFilters[row.id].push(option.title);
          }
        });
        this.updateCheckbox();
        filterData[row.id] = ['All'];
      } else if (row.type === 'date' && this.selectedFilters[row.id].length === 0) {
        this.selectedDate = null;
        filterData[row.id] = this.selectedFilters[row.id];
      } else {
        filterData[row.id] = this.selectedFilters[row.id];
      }

      this.filterEmitted.emit(filterData);
    }
  }

  updateValues(key: string) {
    if (key === 'saleDate' && this.selectedFilters[key][0] && this.selectedFilters[key][0].length > 0 &&
      !this.selectedFilters[key][0].includes('-') && !this.selectedFilters[key][0].includes('Custom Date Range') && this.config) {
      this.selectedFilters[key] = [this.removeCount(this.selectedFilters[key][0])];
    } else if (this.selectedFilters[key].indexOf('All') !== -1 && this.config && this.config !== []) {
      const index = this.config.findIndex((value) => value.id === key);
      this.config[index].options.forEach((option) => {
        if (this.selectedFilters[key].indexOf(option.title) === -1) {
          this.selectedFilters[key].push(option.title);
        }
      });
      this.updateCheckbox();
    }
  }

  updateDateLablesCount(optionsCount) {
    const countsObj = optionsCount;
    const dates = Utils.getDates();
    const saleDateRanges = {};
    countsObj.forEach((obj) => {
      const newLabel = this.getLabel(obj.title, obj.count);
      saleDateRanges[newLabel] = dates[obj.title];
    });
    this.ranges = { ...saleDateRanges };
  }

  updateCheckbox() {
    if (this.CheckboxRef) {
      this.CheckboxRef.forEach((child) => {
        child.model = this.selectedFilters[child.name];
        child.updateCheckbox();
      });
      return true;
    }

  }

  setMinAndMaxDate() {
    this.dateRangeMinDate = moment().subtract(18, 'months');
    this.dateRangeMaxDate = moment();
  }
  removeCount(label: string) {
    const endIndex = label.indexOf('(');
    return endIndex !== -1 ? label.substring(0, endIndex).trim() : label;
  }

  addCount(label: string) {
    const saleDateIndex = this.config.map((instance) => instance.type).indexOf('date');
    const labelIndex = this.config[saleDateIndex].options.map((instance) => instance.title).indexOf(label);
    const formattedLabel = labelIndex !== -1 && !isNullOrUndefined(this.config[saleDateIndex].options[labelIndex].count) ? `${label} (${this.config[saleDateIndex].options[labelIndex].count})`
      : label;
    return formattedLabel;
  }
  getLabel(title: string, count?: number) {
    const label = (count || count === 0) ? `${title} (${count})` : title;
    return label;
  }
  createId(label: string) {
    return `${label.replace(' ', '-')}`;
  }

  getFiltersState() {
    this.filterKeys.map((filterKey: IFilterStateKeys) => {
      this.storeService.mapProps('view', 'filter', filterKey)
        .subscribe((data: { pluckedKeys; val }) => {
          const pluckedKey: IFilterStateKeys = data.pluckedKeys[2] || null;
          const filterState = Utils.prepareFilterData(pluckedKey, data.val);
          this.setFilterState(filterState);
        });
    });
  }

  setFilterState(data) {
      for (const key in data) {
        if (typeof data[key] === 'string') {
          this.selectedFilters[key] = data[key];
        } else {
          this.selectedFilters[key] = JSON.parse(JSON.stringify([...data[key]]));
          if (this.pickerDirective && key === 'saleDate' && data[key].length === 0) {
            this.pickerDirective.clickRange('event', `${this.addCount(dateFilterRange.lastThirtyDays)}`);
            this.pickerDirective.updateCalendars();
          }

          this.updateValues(key);
        }
      }
  }

  resetFilters() {
    const filters: FilterState = new FilterState(); 
    this.viewActions.setFilterState(filters);
  }
}
