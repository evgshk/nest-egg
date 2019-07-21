import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SavingTotals }                       from '@shared/models';
import { DashboardAbstract }                  from '../dashboard-abstract';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent extends DashboardAbstract {

  savingTotalsByCurrency: SavingTotals[] = [];
  savingTotalsRub = 0;

}
