import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { AppSpinnerComponent } from './app-spinner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AppSpinnerComponent],
  exports: [AppSpinnerComponent]
})
export class AppSpinnerModule {
}
