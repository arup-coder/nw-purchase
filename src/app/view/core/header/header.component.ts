import {Component} from '@angular/core';
import { HEADER_LABELS } from '../core.label';

@Component({
  selector: 'nw-purchases-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public pageTitle = HEADER_LABELS.usa.pageTitle;
}
