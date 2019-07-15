import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';
import { FullLayoutModule }        from "./containers/full-layout/full-layout.module";
import { DashboardComponent }      from "./views/dashboard/dashboard.component";
import { HttpClientModule }        from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
