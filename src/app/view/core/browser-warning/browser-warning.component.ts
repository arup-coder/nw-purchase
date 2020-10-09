import {Component, OnInit} from '@angular/core';
import {ExternalNavigationService} from 'src/app/shared/services/external-navigation.service';
import {VEHICLE_ALT_LABELS, BLANK_STATE_COMPONENT, IMAGE_PATH, IE_LOADING_ERROR_LABELS} from '../core.label';

@Component({
  selector: 'nw-browser-warning',
  templateUrl: './browser-warning.component.html',
  styleUrls: ['./browser-warning.component.scss'],
})
export class BrowserWarningComponent implements OnInit {

  public ieWarningIcon = IMAGE_PATH.ieWarningIcon;
  public iconAltText = IE_LOADING_ERROR_LABELS.iconImageAltText;
  public mainTitle = IE_LOADING_ERROR_LABELS.mainTitle;
  public subTitlePrefix = IE_LOADING_ERROR_LABELS.subTitlePrefix;
  public subTitleSuffix = IE_LOADING_ERROR_LABELS.subTitleSuffix;
  chromeUrl = IE_LOADING_ERROR_LABELS.chromeUrl;
  safariUrl = IE_LOADING_ERROR_LABELS.safariUrl;
  chromeUrlText = IE_LOADING_ERROR_LABELS.chromeUrlText;
  safariUrlText = IE_LOADING_ERROR_LABELS.safariUrlText;

  constructor(public extNav: ExternalNavigationService) { }

  ngOnInit() {
  }
}
