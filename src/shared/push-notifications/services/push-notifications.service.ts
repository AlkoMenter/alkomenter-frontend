import {Injectable} from '@angular/core';
import {BehaviorSubject, mergeMapTo, take} from 'rxjs'
import {AngularFireMessaging} from "@angular/fire/compat/messaging";

@Injectable()
export class PushNotificationsService {
  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {
  }

  requestPermission() {
    return this.angularFireMessaging.requestPermission
      .pipe(
        mergeMapTo(this.angularFireMessaging.tokenChanges),
        take(1)
      )
  }
}
