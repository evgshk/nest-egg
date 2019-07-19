import { BrowserModule }                      from '@angular/platform-browser';
import { NgModule }                           from '@angular/core';
import { HttpClientModule }                   from '@angular/common/http';
import { BrowserAnimationsModule }            from '@angular/platform-browser/animations';
import { registerLocaleData }                 from '@angular/common';
import en                                     from '@angular/common/locales/en';
import ru                                     from '@angular/common/locales/ru';
import { firebaseConfig }                     from '@environments/firebaseConfig';
import { FullLayoutModule }                   from '@containers/full-layout/full-layout.module';
import { DashboardComponent }                 from '@views/dashboard/dashboard.component';
import { AngularFireModule }                  from '@angular/fire';
import { AngularFirestoreModule }             from '@angular/fire/firestore';
import { AngularFireAuthModule }              from '@angular/fire/auth';
import { en_US, NZ_I18N, NzTypographyModule } from 'ng-zorro-antd';
import { NzGridModule }                       from 'ng-zorro-antd/grid';
import { NzTableModule }                      from 'ng-zorro-antd/table';
import { NzCardModule }                       from 'ng-zorro-antd/card';
import { NzSwitchModule }                     from 'ng-zorro-antd/switch';
import { AppComponent }                       from './app.component';
import { AppRoutingModule }                   from './app-routing.module';

registerLocaleData(ru);
registerLocaleData(en);

const NZ_ZORRO_MODULE = [
  NzCardModule,
  NzTableModule,
  NzGridModule,
  NzSwitchModule,
  NzTypographyModule
];
const FIRE_MODULES = [
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFirestoreModule,
  AngularFireAuthModule
];

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    ...NZ_ZORRO_MODULE,
    ...FIRE_MODULES,
    AppRoutingModule,
    FullLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
