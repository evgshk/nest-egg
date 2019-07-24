import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'nop.component.html'
})
export class NopComponent {
}
