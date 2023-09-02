import {Injectable} from '@angular/core';
import {BehaviorSubject, mergeMapTo, take} from 'rxjs'
import {AngularFireMessaging} from "@angular/fire/compat/messaging";

@Injectable()
export class PushNotificationsService {
  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {
  }

  requestPermission() {
    this.angularFireMessaging.requestPermission
      .pipe(
        mergeMapTo(this.angularFireMessaging.tokenChanges),
        take(1)
      )
      .subscribe(
        (token) => {
          console.log('Permissions granted', token);
        },
        error => {
          console.error(error)
        }
      )
  }
}
