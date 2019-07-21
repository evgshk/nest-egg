import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavingsComponent }     from './savings/savings.component';

export const routes: Routes = [
  {path: '', component: SavingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavingsRoutingModule {
}
