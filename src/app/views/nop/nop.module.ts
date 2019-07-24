import { NgModule }                       from '@angular/core';
import { RouterModule }                   from '@angular/router';
import { NopComponent }                   from '@views/nop/nop.component';
import { NzButtonModule, NzResultModule } from 'ng-zorro-antd';

const NZ_MODULES = [NzResultModule, NzButtonModule];

@NgModule({
  imports: [...NZ_MODULES, RouterModule],
  declarations: [NopComponent]
})
export class NopModule {
}
