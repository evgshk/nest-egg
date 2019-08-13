import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { ComplexTableModule }   from '@components/complex-table/complex-table.module';
import { SavingsRoutingModule } from './savings-routing.module';
import { SavingsListComponent } from './savings-list/savings-list.component';

@NgModule({
  declarations: [SavingsListComponent],
  imports: [SavingsRoutingModule, CommonModule, ComplexTableModule]
})
export class SavingsModule {
}
