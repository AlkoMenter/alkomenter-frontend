import { Inject, Injectable } from '@angular/core';
import {EntityService} from "@shared/utility";
import {BoozeEntity} from "../model/booze.entity";
import { BoozeDto } from "@entities/boozes-entity";
import { BehaviorSubject, Observable } from 'rxjs';
import {BoozeApi} from '@shared/api/services/booze-api';
import { tap } from 'rxjs/operators';
import { LocalStorage } from '@shared/utility/local-storage.provider';
import { apiBoozeDto } from '@shared/api/models/api-booze-dto';

@Injectable({
  providedIn: 'root'
})
export class BoozeEntityService extends EntityService<BoozeEntity, string> {
  private boozeKey = 'booze';
  boozeData$ = new BehaviorSubject<apiBoozeDto | null>(null)

  constructor(private readonly boozeApi: BoozeApi, @Inject(LocalStorage) private localStorage: Storage) {
    super();
    const booze = this.localStorage.getItem(this.boozeKey);
    if (booze) {
      this.boozeData$.next(JSON.parse(booze));
    }
  }

  getId = (entity: BoozeEntity) => entity.profileId;

  createBooze(boozeData: BoozeDto): Observable<apiBoozeDto> {
    return this.boozeApi.apiBoozeCreateBoozePost$Json({body: boozeData})
      .pipe(tap((data) => {
        this.localStorage.setItem(this.boozeKey, JSON.stringify(data));
        this.boozeData$.next(data);
      }))
  }

  getBoozeById(boozeId: string) {
    return this.boozeApi.apiBoozeCalculateBoozeScheduleGet$Json({boozeId})
  }
}
