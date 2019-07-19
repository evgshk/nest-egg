import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent }  from '@containers/full-layout/full-layout.component';
import { LoginComponent }       from '@views/login/login.component';
import { UserComponent }        from '@views/user/user.component';
import { UserResolver }         from '@views/user/user.resolver';
import { DashboardComponent }   from '@views/dashboard/dashboard.component';
import { AuthGuardService }     from '@shared/services/auth/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuardService]},
  {
    path: '', component: FullLayoutComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'user', component: UserComponent, resolve: {data: UserResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
