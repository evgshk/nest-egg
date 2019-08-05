import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { LoadingService }                                                   from '@shared/services/loading';
import { SubscriptionLike }                                                 from 'rxjs';

@Component({
  selector: 'app-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app-spinner.component.html',
  styleUrls: ['./app-spinner.component.scss']
})
export class AppSpinnerComponent implements OnDestroy {

  statusSubscription: SubscriptionLike;
  isLoading: boolean;
  spinnerTimer;

  constructor(
    private cdr: ChangeDetectorRef,
    private loadingService: LoadingService
  ) {
    this.statusSubscription = this.loadingService.status
      .subscribe(value => {
        this.spinnerTimer = setTimeout(() => {
          this.isLoading = value;
          this.cdr.markForCheck();
        }, 300);
      });
  }

  ngOnDestroy() {
    if (this.statusSubscription) {
      this.statusSubscription.unsubscribe();
      this.statusSubscription = null;
    }
    if (this.spinnerTimer) {
      clearTimeout(this.spinnerTimer);
    }
  }
}
