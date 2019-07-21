import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { NzCardModule }           from 'ng-zorro-antd/card';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent }     from './dashboard/dashboard.component';

const NZ_MODULES = [
  NzCardModule
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    ...NZ_MODULES
  ]
})
export class DashboardModule {
}
