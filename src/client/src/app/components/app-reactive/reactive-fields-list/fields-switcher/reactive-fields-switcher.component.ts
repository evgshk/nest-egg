import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reactive-fields-switcher',
  templateUrl: './reactive-fields-switcher.component.html',
  styleUrls: ['./reactive-fields-switcher.component.scss']
})
export class ReactiveFieldsSwitcherComponent {

  @Input() type;
  @Input() fieldId;
  @Input() control;
  @Input() label;
  @Input() onInputDirective;
  @Input() pipeOption;
  @Input() placeholder;
  @Input() itemsList;
  @Input() maxItems;
  @Input() tooltipMessage;
  @Input() maxLength;
  @Input() subLabel;

}
