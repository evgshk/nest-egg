import { ChangeDetectorRef, Injectable, OnDestroy } from '@angular/core';
import { LoadingService } from '@shared/services';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { StocksService } from '@shared/services/stocks/stocks.service';
import { HttpClient } from '@angular/common/http';
import { StockService } from '@shared/services/firebase/stock.service';

@Injectable()
export abstract class StocksAbstract implements OnDestroy {

  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  isLoading: boolean;

  constructor(
    public cdr: ChangeDetectorRef,
    public loadingService: LoadingService,
    protected stocksService: StocksService,
    protected stockService: StockService,
    protected http: HttpClient,
  ) {
    this.loadingService.status
      .pipe(takeUntil(this.destroy))
      .subscribe(value => this.isLoading = value);
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
