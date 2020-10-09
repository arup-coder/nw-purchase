import { Component, Output, EventEmitter } from '@angular/core';
import { IMAGE_PATH } from '../core.label';
import { ExportType } from 'src/app/shared/custom_types/custom.types';


@Component({
  selector: 'nw-purchases-utility-bar',
  templateUrl: './utility-bar.component.html',
  styleUrls: ['./utility-bar.component.scss']
})
export class UtilityBarComponent{
  public IMAGE_PATH = IMAGE_PATH;
  @Output() public initExport = new EventEmitter<ExportType>();
  public exportType: ExportType  = 'grid';
  constructor() { }

}
