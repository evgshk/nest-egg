import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup }                                                                          from '@angular/forms';
import { markAllFormFieldsAsTouched }                                                         from '@components/app-reactive/reactive-functions/validation';
import { getReactiveForm }                                                                    from '../reactive-functions/form';

@Component({
  selector: 'app-reactive-fields-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reactive-fields-list.component.html'
})
export class ReactiveFieldsListComponent implements OnInit, OnChanges {

  @Input() fieldsList;
  @Input() isSubmitted = false;
  @Output() isSubmittedChange = new EventEmitter();
  @Output() onValidForm = new EventEmitter();

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.fieldsList && this.fieldsList.length ? getReactiveForm(this.fieldsList) : new FormGroup({});
  }

  ngOnChanges() {
    if (this.isSubmitted) {
      if (this.formGroup.valid) {
        this.onValidForm.emit(this.formGroup.value);
      } else {
        markAllFormFieldsAsTouched(this.formGroup);
      }
    }
    this.isSubmitted = false;
    this.isSubmittedChange.emit(false);
  }
}
