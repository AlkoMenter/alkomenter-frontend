import {Component} from '@angular/core';
import {PushNotificationsService} from "@shared/push-notifications";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alkomenter';

  constructor(private pushService: PushNotificationsService) {
    this.pushService.requestPermission();
  }
}
