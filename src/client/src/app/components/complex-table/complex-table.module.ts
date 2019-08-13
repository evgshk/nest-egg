import { NgModule }                 from '@angular/core';
import { RouterModule }             from '@angular/router';
import { ReactiveFieldsListModule } from '@components/app-reactive/reactive-fields-list/reactive-fields-list.module';
import { NzButtonModule }           from 'ng-zorro-antd/button';
import { NzCheckboxModule }         from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule }       from 'ng-zorro-antd/date-picker';
import { NzTableModule }            from 'ng-zorro-antd/table';
import { NzInputModule }            from 'ng-zorro-antd/input';
import { NzDropDownModule }         from 'ng-zorro-antd/dropdown';
import { NzRadioModule }            from 'ng-zorro-antd/radio';
import { NzIconModule }             from 'ng-zorro-antd/icon';
import { NzToolTipModule }          from 'ng-zorro-antd/tooltip';
import { NzModalModule }            from 'ng-zorro-antd/modal';
import { NzDividerModule }          from 'ng-zorro-antd/divider';
import { ComplexTableComponent }    from './complex-table.component';
import { SettingsListModule }       from './settitgs-list/settings-list.module';
import { NumberToFixedPipe }        from './pipes';
import {
  FilterListComponent,
  FilterDateRangeComponent,
  FilterSearchTextComponent
}                                   from './filters';

const FILTERS_LIST = [FilterListComponent, FilterDateRangeComponent, FilterSearchTextComponent];
const ANT_DESIGN_MODULES = [
  NzButtonModule, NzCheckboxModule, NzDatePickerModule, NzDropDownModule,
  NzInputModule, NzTableModule, NzRadioModule, NzIconModule, NzToolTipModule,
  NzModalModule, NzDividerModule
];

@NgModule({
  declarations: [ComplexTableComponent, NumberToFixedPipe, ...FILTERS_LIST],
  imports: [RouterModule, ReactiveFieldsListModule, SettingsListModule, ...ANT_DESIGN_MODULES],
  exports: [ComplexTableComponent, ...FILTERS_LIST, ...ANT_DESIGN_MODULES]
})
export class ComplexTableModule {
}
