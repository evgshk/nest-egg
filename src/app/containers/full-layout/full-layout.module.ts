import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { CommonModule }        from '@angular/common';
import { NzLayoutModule }      from 'ng-zorro-antd/layout';
import { NzMenuModule }        from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule }  from 'ng-zorro-antd/breadcrumb';
import { NzIconModule }        from 'ng-zorro-antd/icon';
import { FullLayoutComponent } from './full-layout.component';

const NZ_LAYOUT_MODULES = [NzMenuModule, NzLayoutModule, NzBreadCrumbModule, NzIconModule];

@NgModule({
  declarations: [FullLayoutComponent],
  imports: [...NZ_LAYOUT_MODULES, CommonModule, RouterModule]
})
export class FullLayoutModule {
}
