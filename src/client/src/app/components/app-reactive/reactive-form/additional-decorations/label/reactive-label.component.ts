import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-reactive-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reactive-label.component.html',
  styleUrls: ['./reactive-label.component.scss']
})
export class ReactiveLabelComponent {

  /**
   * fieldId is a unique field identifier to match field with it's label / tooltip message
   */
  @Input() fieldId: string = null;

  /**
   * hasRequiredIndicator is a flag to show or not red-color start in label
   */
  @Input() hasRequiredIndicator: boolean = null;

  /**
   * tooltipMessage is a message that is in a label as additional information on the field
   */
  @Input() tooltipMessage: string = null;

  /**
   * tooltipPosition - custom tooltip placement
   * values: bottom, top, right, left
   */
  @Input() tooltipPosition = 'top';

  /**
   * label is a main text characterizing the field
   */
  @Input() label: string = null;

  /**
   * Flag if label has file upload icon
   */
  @Input() hasFileUpload = false;


  private filesList = [];

  uploadFiles(files: FileList) {
    this.filesList = Array.from(files);
  }
}
