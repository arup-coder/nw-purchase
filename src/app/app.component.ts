import {Component, DoCheck, ChangeDetectorRef, OnInit} from '@angular/core';
import { Intercom } from 'ng-intercom';

@Component({
  selector: 'nw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck, OnInit {
  constructor(private cdRef: ChangeDetectorRef,
    private intercom: Intercom) {
                
              }
  ngDoCheck() {
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    this.intercom.boot({
      app_id: 'jjy9q9c8',
      widget: {
        "activator": "#intercom" 
      }
    });
  }
}
