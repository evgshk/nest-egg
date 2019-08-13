import { NgModule }                        from '@angular/core';
import { FormsModule }                     from '@angular/forms';
import { CommonModule }                    from '@angular/common';
import { ReactiveFieldsSwitcherComponent } from './fields-switcher';
import { ReactiveFieldsListComponent }     from './reactive-fields-list.component';
import { AppReactiveFormsModule }          from '../reactive-form/app-reactive-forms.module';

@NgModule({
  declarations: [ReactiveFieldsListComponent, ReactiveFieldsSwitcherComponent],
  imports: [AppReactiveFormsModule, CommonModule, FormsModule],
  exports: [ReactiveFieldsListComponent, ReactiveFieldsSwitcherComponent, AppReactiveFormsModule]
})
export class ReactiveFieldsListModule {
}
