import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { FormsModule }           from '@angular/forms';
import { RouterModule }          from '@angular/router';
import { NzButtonModule }        from 'ng-zorro-antd/button';
import { NzCheckboxModule }      from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule }    from 'ng-zorro-antd/date-picker';
import { NzTableModule }         from 'ng-zorro-antd/table';
import { NzInputModule }         from 'ng-zorro-antd/input';
import { NzDropDownModule }      from 'ng-zorro-antd/dropdown';
import { NzRadioModule }         from 'ng-zorro-antd/radio';
import { ComplexTableComponent } from './complex-table.component';
import {
  FilterListComponent,
  FilterDateRangeComponent,
  FilterSearchTextComponent
}                                from './filters';
import { NumberToFixedPipe }     from './pipes';

const ANT_DESIGN_MODULES = [
  NzButtonModule,
  NzCheckboxModule,
  NzDatePickerModule,
  NzDropDownModule,
  NzInputModule,
  NzTableModule,
  NzRadioModule
];

const FILTERS_LIST = [
  FilterListComponent,
  FilterDateRangeComponent,
  FilterSearchTextComponent,
];

@NgModule({
  declarations: [ComplexTableComponent, NumberToFixedPipe, ...FILTERS_LIST],
  imports: [CommonModule, FormsModule, RouterModule, ...ANT_DESIGN_MODULES],
  exports: [ComplexTableComponent, ...FILTERS_LIST, ...ANT_DESIGN_MODULES]
})
export class ComplexTableModule {
}
