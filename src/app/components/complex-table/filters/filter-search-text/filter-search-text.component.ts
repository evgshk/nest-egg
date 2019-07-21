import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-search-text',
  templateUrl: 'filter-search-text.component.html',
  styleUrls: ['filter-search-text.component.scss']
})
export class FilterSearchTextComponent {

  @Input() placeholder;
  @Output() searchList = new EventEmitter();

  isVisible = false;
  search = '';

  filter() {
    this.searchList.emit([this.search]);
    this.isVisible = false;
  }

  reset() {
    this.search = '';
    this.searchList.emit([]);
    this.isVisible = false;
  }
}
