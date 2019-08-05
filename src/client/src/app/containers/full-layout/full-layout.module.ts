import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { CommonModule }        from '@angular/common';
import { AppSpinnerModule }    from '@components/app-spinner/app-spinner.module';
import { NzLayoutModule }      from 'ng-zorro-antd/layout';
import { NzMenuModule }        from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule }  from 'ng-zorro-antd/breadcrumb';
import { NzIconModule }        from 'ng-zorro-antd/icon';
import { FullLayoutComponent } from './full-layout.component';

const NZ_LAYOUT_MODULES = [
  NzMenuModule,
  NzLayoutModule,
  NzBreadCrumbModule,
  NzIconModule
];

@NgModule({
  declarations: [FullLayoutComponent],
  imports: [
    AppSpinnerModule,
    CommonModule,
    RouterModule,
    ...NZ_LAYOUT_MODULES
  ]
})
export class FullLayoutModule {
}
