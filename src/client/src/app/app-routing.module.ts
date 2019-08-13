import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent }  from '@containers/full-layout/full-layout.component';
import { LoginComponent }       from '@views/auth/login/login.component';
import { NopComponent }         from '@views/nop';
import { AuthGuardService }     from '@shared/services/auth/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuardService]},
  {
    // todo add Auth Guard to layout component later
    path: '', component: FullLayoutComponent,
    children: [
      {path: 'dashboard', loadChildren: () => import('./views/full-layout/dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'savings', loadChildren: () => import('./views/full-layout/savings/savings.module').then(m => m.SavingsModule)},
      {path: 'stocks', loadChildren: () => import('./views/full-layout/stocks/stocks.module').then(m => m.StocksModule)},
      {path: 'user', loadChildren: () => import('./views/full-layout/user/user.module').then(m => m.UserModule)},
    ]
  },
  {path: '**', component: NopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
