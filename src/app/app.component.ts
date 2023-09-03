import {Component} from '@angular/core';
import {PushNotificationsService} from "@shared/push-notifications";
import {ProfileService} from "@entities/profile-entity/services/profile.service";
import {combineLatestWith, of, switchMap} from "rxjs";
import {AuthService} from "@entities/auth/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alkomenter';

  constructor(private pushService: PushNotificationsService, private profilesService: ProfileService, private auth: AuthService) {
    this.pushService.requestPermission()
      .pipe(
        combineLatestWith(this.auth.account$),
        switchMap(([token, account]) => token && account
          ? this.profilesService.updateNotifyToken(account.id, token)
          : of(null))
      )
      .subscribe(() => {
      })

  }
}
