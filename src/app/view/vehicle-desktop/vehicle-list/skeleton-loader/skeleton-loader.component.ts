import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'nw-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent implements OnChanges {
  @Input() recordPerPage  = 25;
  @Input() columnPerRow = 9;
  @Input() skeletonTemplate = 'nw';
  public mockRow = Array.from({ length: this.recordPerPage });
  public mockColumn = Array.from({ length: this.columnPerRow });

  ngOnChanges(change) {
    this.mockRow = Array.from({ length: this.recordPerPage });
    this.mockColumn = Array.from({ length: this.columnPerRow });
  }
}
