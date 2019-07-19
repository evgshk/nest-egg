import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent }  from '@containers/full-layout/full-layout.component';
import { DashboardComponent }   from '@views/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: '', component: FullLayoutComponent,
    children: [{path: 'dashboard', component: DashboardComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
