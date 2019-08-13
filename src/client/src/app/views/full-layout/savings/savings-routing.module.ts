import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavingsListComponent } from './savings-list/savings-list.component';

export const routes: Routes = [
  {path: '', component: SavingsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavingsRoutingModule {
}
