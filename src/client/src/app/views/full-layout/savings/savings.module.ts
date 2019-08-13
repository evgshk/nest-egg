import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { ComplexTableModule }     from '@components/complex-table/complex-table.module';
import { AppReactiveFormsModule } from '@components/app-reactive/reactive-form/app-reactive-forms.module';
import { SavingsRoutingModule }   from './savings-routing.module';
import { SavingsListComponent }   from './savings-list/savings-list.component';

@NgModule({
  declarations: [SavingsListComponent],
  imports: [SavingsRoutingModule, CommonModule, ComplexTableModule, AppReactiveFormsModule]
})
export class SavingsModule {
}
