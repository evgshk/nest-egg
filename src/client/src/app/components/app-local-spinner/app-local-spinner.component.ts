import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-local-spinner',
  templateUrl: './app-local-spinner.component.html',
  styleUrls: ['./app-local-spinner.component.scss']
})
export class AppLocalSpinnerComponent {

  isReadyToAppear = false;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    setTimeout(() => {
      this.isReadyToAppear = true;
      this.cdr.markForCheck();
    }, 300);
  }
}
