import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }        from '@angular/common/http';
import { registerLocaleData }      from '@angular/common';
import en                          from '@angular/common/locales/en';
import ru                          from '@angular/common/locales/ru';
import { AngularFireModule }       from '@angular/fire';
import { AngularFirestoreModule }  from '@angular/fire/firestore';
import { AngularFireAuthModule }   from '@angular/fire/auth';
import { firebaseConfig }          from '@firebase/config';
import { FullLayoutModule }        from '@containers/full-layout/full-layout.module';
import { LoginModule }             from '@views/auth/login/login.module';
import { NopModule }               from '@views/nop/nop.module';
import { en_US, NZ_I18N }          from 'ng-zorro-antd/i18n';
import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';

registerLocaleData(ru);
registerLocaleData(en);

const FIRE_MODULES = [
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFirestoreModule,
  AngularFireAuthModule
];

const COMPONENTS_MODULES = [
  FullLayoutModule,
  LoginModule,
  NopModule
];

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...COMPONENTS_MODULES,
    ...FIRE_MODULES
  ],
  declarations: [AppComponent],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
