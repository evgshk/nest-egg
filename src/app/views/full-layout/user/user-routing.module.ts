import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent }        from './user/user.component';
import { UserResolver }         from './user/user.resolver';

export const routes: Routes = [
  {path: '', component: UserComponent, resolve: {data: UserResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
