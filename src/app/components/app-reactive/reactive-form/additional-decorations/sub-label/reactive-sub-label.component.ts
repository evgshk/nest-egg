import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-reactive-am-sub-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reactive-sub-label.component.html',
  styleUrls: ['./reactive-sub-label.component.scss']
})
export class ReactiveSubLabelComponent {
  @Input() subLabel: string;
}
