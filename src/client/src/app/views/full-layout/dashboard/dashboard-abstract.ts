import { Injectable, OnDestroy } from '@angular/core';
import { LoadingService }        from '@shared/services';
import { takeUntil }             from 'rxjs/operators';
import { ReplaySubject }         from 'rxjs';

@Injectable()
export abstract class DashboardAbstract implements OnDestroy {

  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  isLoading: boolean;

  constructor(
    public loadingService: LoadingService,
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
