import {Injectable} from '@angular/core';
import {EntityService} from "@shared/utility";
import {BoozeEntity} from "../model/booze.entity";
import {BoozeDto} from "@entities/boozes-entity";
import { Observable } from 'rxjs';
import { BoozeApi } from '@shared/api/services/booze-api';

@Injectable({
  providedIn: 'root'
})
export class BoozeEntityService extends EntityService<BoozeEntity, string> {
  constructor(private readonly boozeApi: BoozeApi) {
    super()
  }

  getId = (entity: BoozeEntity) => entity.profileId;

  createBooze(boozeData: BoozeDto): Observable<any> {
    return this.boozeApi.apiBoozeCreateBoozePost$Json({ body: boozeData })
  }
}
