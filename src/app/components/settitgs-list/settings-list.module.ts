import { NgModule }              from '@angular/core';
import { FormsModule }           from '@angular/forms';
import { CommonModule }          from '@angular/common';
import { DragDropModule }        from '@angular/cdk/drag-drop';
import { NzCheckboxModule }      from 'ng-zorro-antd/checkbox';
import { NzInputNumberModule }   from 'ng-zorro-antd/input-number';
import { NzModalModule }         from 'ng-zorro-antd/modal';
import { NzSelectModule }        from 'ng-zorro-antd/select';
import { NzTableModule }         from 'ng-zorro-antd/table';
import { NzToolTipModule }       from 'ng-zorro-antd/tooltip';
import { NzIconModule }          from 'ng-zorro-antd/icon';
import { SettingsListComponent } from './settings-list.component';

const ANT_DESIGN_MODULES = [
  NzTableModule,
  NzCheckboxModule,
  NzSelectModule,
  NzInputNumberModule,
  NzModalModule,
  NzToolTipModule,
  NzIconModule
];

@NgModule({
  declarations: [
    SettingsListComponent
  ],
  imports: [
    ...ANT_DESIGN_MODULES,
    CommonModule,
    FormsModule,
    DragDropModule
  ],
  exports: [
    SettingsListComponent
  ]
})
export class SettingsListModule {
}
