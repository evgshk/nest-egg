import { Component, AfterContentInit, EventEmitter }       from '@angular/core';
import { Input, Output, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl }                                 from '@angular/forms';
import { hasRequiredValidator }                            from '../reactive-functions/validation';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppReactiveAbstractComponent implements AfterContentInit, DoCheck {

  /**
   * fieldId is a unique field characteristic
   * Example: 'email', 'password'
   */
  @Input() fieldId: string;

  /**
   * control is a reactive form validator/value controller
   *    ---IS A REQUIRED PROPERTY---
   */
  @Input() control: AbstractControl;

  /**
   * label is a custom text for label
   */
  @Input() label: string;

  /**
   * subLabel is a grey text under the field
   */
  @Input() subLabel: string;

  /**
   * hasRequiredIndicator is flag to notify user that this field is required to fill
   * Red star indicator*
   */
  @Input() hasRequiredIndicator: boolean;

  /**
   * Input Placeholder is a text inside of the input field
   */
  @Input() placeholder: string;

  /**
   * Disabled is used to lock fields
   */
  @Input() isDisabled: boolean;

  /**
   * Tooltip message is additional text in question icon
   */
  @Input() tooltipMessage: string;


  @Output() valueOnChangeChanged = new EventEmitter();
  @Output() valueOnBlurChanged = new EventEmitter();
  @Output() enterKey = new EventEmitter();

  validationErrors;

  ngAfterContentInit() {
    this.hasRequiredIndicator = this.hasRequiredIndicator === false ? false : hasRequiredValidator(this.control);
  }

  ngDoCheck() {
    this.validationErrors = this.control && this.control.touched && this.control.invalid && this.control['errors'];
  }
}
