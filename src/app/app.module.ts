import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { RouterModule }                     from '@angular/router';
import { HttpClientModule }                 from '@angular/common/http';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { registerLocaleData }               from '@angular/common';
import en                                   from '@angular/common/locales/en';
import ru                                   from '@angular/common/locales/ru';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule }                from '@angular/fire';
import { AngularFirestoreModule }           from '@angular/fire/firestore';
import { AngularFireAuthModule }            from '@angular/fire/auth';
import { firebaseConfig }                   from '@firebase/config';
import { FullLayoutModule }                 from '@containers/full-layout/full-layout.module';
import { NopComponent }                     from '@views/nop';
import { UserComponent }                    from '@views/full-layout/user/user.component';
import { LoginModule }                      from '@views/auth/login/login.module';
import { en_US, NZ_I18N }                   from 'ng-zorro-antd/i18n';
import { NzResultModule }                   from 'ng-zorro-antd/result';
import { NzButtonModule }                   from 'ng-zorro-antd/button';
import { AppComponent }                     from './app.component';
import { AppRoutingModule }                 from './app-routing.module';

registerLocaleData(ru);
registerLocaleData(en);

const FIRE_MODULES = [
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFirestoreModule,
  AngularFireAuthModule
];

// todo check out if it can be moved out, as it's used only in NopComponent
const NZ_MODULES = [
  NzResultModule,
  NzButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
    NopComponent,
    // todo move it to UserModule later
    UserComponent
  ],
  imports: [
    AppRoutingModule,
    FullLayoutModule,
    LoginModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...FIRE_MODULES,
    ...NZ_MODULES,
    // todo check out if it can be moved out as it's used only in Nop Component
    RouterModule,
    // todo move it to UserModule later, as it's used only in user child component
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
