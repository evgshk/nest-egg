import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { AppReactiveFormsModule } from '@components/app-reactive/reactive-form/app-reactive-forms.module';
import { UserRoutingModule }      from './user-routing.module';
import { UserComponent }          from './user/user.component';

@NgModule({
  imports: [
    UserRoutingModule,
    CommonModule,
    AppReactiveFormsModule
  ],
  declarations: [UserComponent]
})
export class UserModule {
}
