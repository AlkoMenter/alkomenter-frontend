import {Injectable} from '@angular/core';
import {EntityService} from "@shared/utility";
import {BoozeEntity} from "../model/booze.entity";
import {BoozeDto} from "@entities/boozes-entity";

@Injectable({
  providedIn: 'root'
})
export class BoozeEntityService extends EntityService<BoozeEntity> {
  constructor() {
    super()
  }

  getId = (entity: BoozeEntity) => entity.id;

  createBooze(boozeData: BoozeDto) {

  }
}
