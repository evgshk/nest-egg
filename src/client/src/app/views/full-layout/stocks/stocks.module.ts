import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksComponent } from './stocks/stocks.component';
import { StocksRoutingModule } from './stocks-routing.module';
import { StocksService } from '@shared/services/stocks';
import { ComplexTableModule } from '@components/complex-table/complex-table.module';

@NgModule({
  declarations: [StocksComponent],
  imports: [StocksRoutingModule, CommonModule, ComplexTableModule],
  providers: [StocksService]
})
export class StocksModule {
}
