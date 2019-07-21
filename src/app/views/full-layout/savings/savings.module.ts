import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { SettingsListModule }   from '@components/settitgs-list/settings-list.module';
import { ComplexTableModule }   from '@components/complex-table/complex-table.module';
import { SavingsRoutingModule } from './savings-routing.module';
import { SavingsComponent }     from './savings/savings.component';

@NgModule({
  declarations: [SavingsComponent],
  imports: [
    SavingsRoutingModule,
    CommonModule,
    ComplexTableModule,
    SettingsListModule
  ]
})
export class SavingsModule {
}
