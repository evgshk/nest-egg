import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray }                   from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss']
})
export class SettingsListComponent implements OnInit {

  @Input() settingsList = [];
  @Output() settingsListChange = new EventEmitter();
  @Input() hasIdNavigation = false;

  firstItem;
  restItems;
  isSettingsVisible = false;

  ngOnInit() {
    if (this.hasIdNavigation) {
      this.firstItem = this.settingsList[0];
      this.restItems = this.settingsList.filter((x, i) => i > 0);
    } else {
      this.restItems = this.settingsList;
    }
  }

  formatterPercent = (value: number) => `${value ? value + ' %' : ''}`;
  parserPercent = (value: string) => +value.replace(' %', '');

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.restItems, event.previousIndex, event.currentIndex);
    this.settingsListChange.emit(this.hasIdNavigation ? [this.firstItem, ...this.restItems] : [...this.restItems]);
  }
}
