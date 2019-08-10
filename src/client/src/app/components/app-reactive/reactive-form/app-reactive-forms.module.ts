import { NgModule }                     from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import { CommonModule }                 from '@angular/common';
import { NzFormModule }                 from 'ng-zorro-antd/form';
import { NzToolTipModule }              from 'ng-zorro-antd/tooltip';
import { NzBadgeModule }                from 'ng-zorro-antd/badge';
import { NzInputModule }                from 'ng-zorro-antd/input';
import { NzCheckboxModule }             from 'ng-zorro-antd/checkbox';
import { NzIconModule }                 from 'ng-zorro-antd/icon';
import { NzDatePickerModule }           from 'ng-zorro-antd/date-picker';
import { AppReactiveAbstractComponent } from './app-reactive-abstract.component';
import { ValidationMessageComponent }   from './additional-decorations/validation-message';
import {
  ReactiveLabelComponent,
  ReactiveSubLabelComponent,
  ReactiveCheckBoxComponent,
  ReactiveInputComponent,
  ReactiveDatePickerComponent
}                                       from './index';
import { OnInputValueControlDirective } from '../reactive-directives';
import { ValueTransformPipe }           from '../reactive-pipes';

const NZ_MODULES = [
  NzFormModule, NzToolTipModule, NzIconModule, NzBadgeModule,
  NzInputModule, NzDatePickerModule, NzCheckboxModule
];
const APP_DECORATIONS_COMPONENTS = [
  ReactiveLabelComponent,
  ReactiveSubLabelComponent,
  ValidationMessageComponent
];
const APP_REACTIVE_COMPONENTS = [
  AppReactiveAbstractComponent,
  ReactiveInputComponent,
  ReactiveCheckBoxComponent,
  ReactiveDatePickerComponent
];

@NgModule({
  declarations: [
    ...APP_REACTIVE_COMPONENTS,
    ...APP_DECORATIONS_COMPONENTS,
    OnInputValueControlDirective,
    ValueTransformPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...NZ_MODULES
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ...APP_REACTIVE_COMPONENTS]
})
export class AppReactiveFormsModule {
}
