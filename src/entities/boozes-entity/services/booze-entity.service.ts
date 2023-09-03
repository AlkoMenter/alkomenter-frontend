import {Injectable} from '@angular/core';
import {EntityService} from "@shared/utility";
import {BoozeEntity} from "../model/booze.entity";
import {BoozeDto} from "@entities/boozes-entity";

@Injectable({
  providedIn: 'root'
})
export class BoozeEntityService extends EntityService<BoozeEntity, string> {
  constructor() {
    super()
  }

  getId = (entity: BoozeEntity) => entity.profileId;

  createBooze(boozeData: BoozeDto) {
    console.log(boozeData)
  }
}
