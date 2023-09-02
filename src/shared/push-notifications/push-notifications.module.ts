import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PushNotificationsService} from "@shared/push-notifications/services/push-notifications.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [PushNotificationsService]
})
export class PushNotificationsModule {
}
