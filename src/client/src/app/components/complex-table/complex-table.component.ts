import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { includes }                                                                   from 'lodash-es';

@Component({
  selector: 'app-complex-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'complex-table.component.html',
  styleUrls: ['complex-table.component.scss']
})
export class ComplexTableComponent implements OnChanges {

  @Input() headers = {};
  @Input() listOfInitialData = [];
  @Input() hasIdNavigation = false;
  @Input() addEditForm = [];
  @Input() isAddEditSubmitted = false;
  @Output() isAddEditSubmittedChange = new EventEmitter();
  @Output() addEditItem = new EventEmitter();

  filterConditionsList = [];
  settingsList = [];

  listOfSortedFilteredData = [];
  listOfDisplayData = [];

  isAddModalVisible = false;

  curPage = 1;
  pageSize = 10;
  sortName: string | null = null;
  sortValue: string | null = null;

  ngOnChanges() {
    this.settingsList = Object.keys(this.headers)
      .map(x => ({
        id: x,
        title: this.headers[x]['label'],
        align: this.headers[x]['align'] || 'left',
        width: this.headers[x]['width'] || 'Auto',
        isDisabled: x === 'id',
        isShown: x === 'id' ? true : this.headers[x]['isShown'] !== false,
      }));
    this.listOfSortedFilteredData = [...this.listOfInitialData];
    this.paginationHandle();
  }

  onAddEditItem(e) {
    this.addEditItem.emit(e);
  }

  editItem(item) {
    this.addEditForm = this.addEditForm.map(x => ({...x, value: item[x['fieldId']]}));
    this.isAddModalVisible = true;
  }

  deleteItem(item) {
    console.log(item);
  }

  onFilter(prop, list, type) {
    if (list.length) {
      const filteredConditionsList = this.filterConditionsList.filter(x => x['prop'] === prop);
      if (filteredConditionsList.length) {
        const condition = filteredConditionsList[0];
        condition.list = [...list];
      } else {
        this.filterConditionsList = [...this.filterConditionsList, {prop, list, type}];
      }
    } else {
      this.filterConditionsList = this.filterConditionsList.filter(x => x['prop'] !== prop);
    }
    this.sortAndFilterData();
  }

  sortAndFilterData() {
    const isAtLeastOneFilter = this.filterConditionsList.length;
    this.listOfSortedFilteredData = [];
    const filterFunction = item => this.checkItem(item, this.filterConditionsList);
    this.sortData(isAtLeastOneFilter ?
      this.listOfInitialData.filter(item => filterFunction(item)) :
      this.listOfInitialData
    );
  }

  checkItem(item, conditionsList) {
    let filterStatusList = [];
    conditionsList.forEach(x => {
      switch (x['type']) {
        case 'date-range':
          filterStatusList = [...filterStatusList, checkDateRanges()];
          break;
        case 'list':
          filterStatusList = [...filterStatusList, checkLists()];
          break;
        case 'search-text':
          filterStatusList = [...filterStatusList, checkSearchText()];
          break;
      }
    });

    return !includes(filterStatusList, false);

    function checkDateRanges() {
      let isFilter = [];
      let conditionsLength = 0;
      conditionsList.filter(x => x['type'] === 'date-range').forEach(x => {
        conditionsLength += 1;
        const isItemInRange = (item[x['prop']] >= x['list'][0]) && (item[x['prop']] <= x['list'][1]);
        if (isItemInRange) {
          isFilter = [...isFilter, true];
        }
      });
      return isFilter.length === conditionsLength;
    }

    function checkSearchText() {
      let isFilter = [];
      let conditionsLength = 0;
      conditionsList.filter(x => x['type'] === 'search-text').forEach(x => {
        conditionsLength += 1;
        if (includes(item[x['prop']].toLowerCase(), x['list'][0].toLowerCase())) {
          isFilter = [...isFilter, true];
        }
      });
      return isFilter.length === conditionsLength;
    }

    function checkLists() {
      let isFilter = [];
      let conditionsLength = 0;
      conditionsList.filter(x => x['type'] === 'list').forEach(x => {
        conditionsLength += 1;
        if (includes(x['list'], item[x['prop']])) {
          isFilter = [...isFilter, true];
        }
      });
      return isFilter.length === conditionsLength;
    }
  }

  sort(sort: { key: string; value: string }) {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.sortData(this.listOfSortedFilteredData);
  }

  sortData(data) {
    if (this.sortName && this.sortValue) {
      this.listOfSortedFilteredData = data.sort((a, b) =>
        this.sortValue === 'ascend' ?
          a[this.sortName] > b[this.sortName] ? 1 : -1 :
          b[this.sortName] > a[this.sortName] ? 1 : -1
      );
    } else {
      this.listOfSortedFilteredData = data;
    }
    this.paginationHandle();
  }

  paginationHandle(reset?: boolean, curPage?: number) {
    this.curPage = reset ? 1 : curPage || this.curPage;
    const startIndex = (this.curPage - 1) * this.pageSize;
    const endIndex = this.curPage * this.pageSize;
    this.listOfDisplayData = this.listOfSortedFilteredData.filter((x, index) => index >= startIndex && index < endIndex);
  }
}
