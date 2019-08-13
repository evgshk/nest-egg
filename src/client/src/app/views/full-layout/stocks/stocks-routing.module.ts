import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';

export const routes: Routes = [
  {path: '', component: StocksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule {
}
