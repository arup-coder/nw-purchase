import { Component, OnInit } from '@angular/core';
import { IMAGE_PATH, HEADER_LABELS } from '../core.label';

@Component({
  selector: 'nw-purchases-mob-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent implements OnInit {
  public chevronLeft = IMAGE_PATH.chevronLeft;
  public mainTitle = HEADER_LABELS.usa.pageTitle;
  constructor() { }

  ngOnInit() {
  }

}
