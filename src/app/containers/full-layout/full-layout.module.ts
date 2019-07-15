import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { NzLayoutModule }      from 'ng-zorro-antd/layout';
import { NzMenuModule }        from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule }  from 'ng-zorro-antd/breadcrumb';
import { FullLayoutComponent } from './full-layout.component';

const NZ_LAYOUT_MODULES = [NzMenuModule, NzLayoutModule, NzBreadCrumbModule];

@NgModule({
  declarations: [FullLayoutComponent],
  imports: [...NZ_LAYOUT_MODULES, RouterModule]
})
export class FullLayoutModule {
}
