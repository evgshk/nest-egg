import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';
import { FullLayoutModule }        from './containers/full-layout/full-layout.module';
import { DashboardComponent }      from './views/dashboard/dashboard.component';
import { HttpClientModule }        from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzGridModule }            from 'ng-zorro-antd/grid';
import { NzTableModule }           from 'ng-zorro-antd/table';
import { NzCardModule }            from 'ng-zorro-antd/card';
import { NzSwitchModule }          from 'ng-zorro-antd/switch';

import { AngularFireModule }       from '@angular/fire';
import { AngularFirestoreModule }  from '@angular/fire/firestore';
import { AngularFireAuthModule }   from '@angular/fire/auth';

import { environment }             from '../environments/environment';

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
    BrowserAnimationsModule,
    NzCardModule,
    NzTableModule,
    NzGridModule,
    NzSwitchModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
