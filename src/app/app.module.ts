import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { HttpClientModule }                 from '@angular/common/http';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { registerLocaleData }               from '@angular/common';
import en                                   from '@angular/common/locales/en';
import ru                                   from '@angular/common/locales/ru';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule }                from '@angular/fire';
import { AngularFirestoreModule }           from '@angular/fire/firestore';
import { AngularFireAuthModule }            from '@angular/fire/auth';
import { FullLayoutModule }                 from '@containers/full-layout/full-layout.module';
import { LoginComponent }                   from '@views/auth/login/login.component';
import { UserComponent }                    from '@views/full-layout/user/user.component';
import { firebaseConfig }                   from '@firebase/config';
import { en_US, NZ_I18N }                   from 'ng-zorro-antd';
import { AppComponent }                     from './app.component';
import { AppRoutingModule }                 from './app-routing.module';

registerLocaleData(ru);
registerLocaleData(en);

const FIRE_MODULES = [
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFirestoreModule,
  AngularFireAuthModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    ...FIRE_MODULES,
    AppRoutingModule,
    FullLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
