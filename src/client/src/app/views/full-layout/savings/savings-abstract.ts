import { ChangeDetectorRef, Injectable, OnDestroy }           from '@angular/core';
import { ExchangeRateService, LoadingService, SavingService } from '@shared/services';
import { takeUntil }                                          from 'rxjs/operators';
import { ReplaySubject }                                      from 'rxjs';

@Injectable()
export abstract class SavingsAbstract implements OnDestroy {

  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  isLoading: boolean;

  constructor(
    public cdr: ChangeDetectorRef,
    public loadingService: LoadingService,
    public savingService: SavingService,
    public exchangeRateService: ExchangeRateService
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
