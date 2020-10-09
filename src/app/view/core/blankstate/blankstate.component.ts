import {Component, OnInit} from '@angular/core';
import {ExternalNavigationService} from 'src/app/shared/services/external-navigation.service';
import {VEHICLE_ALT_LABELS, BLANK_STATE_COMPONENT, IMAGE_PATH} from '../core.label';

@Component({
  selector: 'nw-purchases-blankstate',
  templateUrl: './blankstate.component.html',
})
export class BlankstateComponent implements OnInit {
  public carIcon = IMAGE_PATH.carIcon;
  public carIconAltText = VEHICLE_ALT_LABELS.blankStateCarImage;
  public blankStateMaintitle = BLANK_STATE_COMPONENT.usa.blankStateMaintitle;
  public blankStateSubtitle = BLANK_STATE_COMPONENT.usa.blankStateSubtitle;
  public blankStateButtonText = BLANK_STATE_COMPONENT.usa.blankStateButtonText;

  constructor(public extNav: ExternalNavigationService) { }

  ngOnInit() {
  }
}
