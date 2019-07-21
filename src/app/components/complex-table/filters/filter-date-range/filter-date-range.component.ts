import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-date-range',
  templateUrl: 'filter-date-range.component.html',
  styleUrls: ['filter-date-range.component.scss']
})
export class FilterDateRangeComponent {

  @Input() dateFormat = 'dd.MM.yyyy';
  @Output() dateRangeList = new EventEmitter();

  isVisible = false;
  dateRange = [];

  filter() {
    this.emit();
    this.isVisible = false;
  }

  reset() {
    this.dateRange = [];
    this.emit();
    this.isVisible = false;
  }

  emit() {
    this.dateRangeList.emit(this.dateRange);
  }
}
