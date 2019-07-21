import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent }  from '@containers/full-layout/full-layout.component';
import { LoginComponent }       from '@views/auth/login/login.component';
import { UserComponent }        from '@views/full-layout/user/user.component';
import { UserResolver }         from '@views/full-layout/user/user.resolver';
import { AuthGuardService }     from '@shared/services/auth/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuardService]},
  {
    path: 'main', component: FullLayoutComponent,
    children: [
      {path: 'dashboard', loadChildren: () => import('./views/full-layout/dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'savings', loadChildren: () => import('./views/full-layout/savings/savings.module').then(m => m.SavingsModule)},
      // TODO add user module later
      // Possibly that's gonna be on other layout
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
