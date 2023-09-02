import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environment/environment";
import {AngularFireMessagingModule} from "@angular/fire/compat/messaging";
import {PushNotificationsModule} from "@shared/push-notifications/push-notifications.module";
import {ProfileSmallComponent} from "@widgets/profile-small/profile-small.component";
import {LogoComponent} from "@widgets/logo/logo.component";
import {ApiModule} from "@shared/api/api.module";
import {HttpClientModule} from "@angular/common/http";
import {DefaultLocalStorageProvider} from "@shared/utility/local-storage.provider";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    PushNotificationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ProfileSmallComponent,
    LogoComponent,
    HttpClientModule,
    ApiModule.forRoot({rootUrl: ''}),
  ],
  providers: [
    DefaultLocalStorageProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
