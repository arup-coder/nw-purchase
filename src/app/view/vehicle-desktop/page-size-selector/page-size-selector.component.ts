import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ag-page-size-selector',
  templateUrl: './page-size-selector.component.html',
  styleUrls: ['./page-size-selector.component.scss'],
})
export class PageSizeSelectorComponent implements OnInit {
    public pageObjects: any = [
      {pageSize: 25, value: '25 Cars / Page'},
      {pageSize: 50, value: '50 Cars / Page'},
      {pageSize: 100, value: '100 Cars / Page'},
    ];

    public selectedPageSize: any = 25;
    @Output() pageSelectionChange: EventEmitter<number> = new EventEmitter();

    onPageSelectorChange(pageSize: number) {
      this.selectedPageSize = pageSize;
      this.pageSelectionChange.emit(this.selectedPageSize);
    }

    ngOnInit() {
    }
}

