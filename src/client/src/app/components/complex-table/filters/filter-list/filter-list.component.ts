import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: 'filter-list.component.html',
  styleUrls: ['filter-list.component.scss']
})
export class FilterListComponent implements OnInit {

  @Input() filterOptions = [];
  @Output() filterList = new EventEmitter();

  isVisible = false;
  _filterList = [];

  ngOnInit() {
    this.filterOptions = this.filterOptions.map(x => ({label: x, checked: false}));
  }

  filter() {
    this._filterList = this.filterOptions.filter(x => x['checked']).map(x => x['label']);
    this.filterList.emit(this._filterList.length ? this._filterList : this.getFullOptionsList());
    this.isVisible = false;
  }

  reset() {
    this._filterList = this.getFullOptionsList();
    this.filterList.emit([]);
    this.filterOptions.forEach(x => x['checked'] = false);
    this.isVisible = false;
  }

  getFullOptionsList() {
    return this.filterOptions.map(x => x['label']);
  }
}
