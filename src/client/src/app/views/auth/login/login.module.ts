import { NgModule }               from '@angular/core';
import { AppReactiveFormsModule } from '@components/app-reactive/reactive-form/app-reactive-forms.module';
import { NzButtonModule }         from 'ng-zorro-antd/button';
import { NzIconModule }           from 'ng-zorro-antd/icon';
import { LoginComponent }         from './login.component';

const NZ_MODULES = [
  NzButtonModule,
  NzIconModule
];

@NgModule({
  declarations: [LoginComponent],
  imports: [AppReactiveFormsModule, ...NZ_MODULES]
})
export class LoginModule {
}
