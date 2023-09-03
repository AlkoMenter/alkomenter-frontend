import {Injectable} from '@angular/core';
import {BehaviorSubject, take} from "rxjs";
import {StageEntity} from "@entities/stage-entity/model/stage.entity";
import {CreateStageDto} from "@entities/stage-entity/model/dtos/create-stage.dto";
import {StageApi} from "@shared/api/services/stage-api";
import {EntityService} from "@shared/utility";

@Injectable({
  providedIn: 'root'
})
export class StageService extends EntityService<StageEntity, string> {
  stage$ = new BehaviorSubject<StageEntity | null>(null);

  getId = (e: StageEntity) => e.id

  constructor(
    private stageApi: StageApi
  ) {
    super()
  }

  createStage(createStageDto: CreateStageDto) {
    this.stageApi.apiStageCreateStagePost$Json({body: createStageDto})
      .pipe(
        take(1)
      )
      .subscribe((stage) => {
        this.stage$.next({
          id: stage.id ?? '',
          name: stage.name,
          maxProMille: stage.maxProMille,
          minProMille: stage.minProMille
        });
      })
  }

  getStages() {
    this.setEntities([
      {
        id: 'c28145f7-f5aa-40a1-bab0-c61ee2d8518d',
        name: 'Выпивший',
        minProMille: 5,
        maxProMille: 10
      }
    ])
  }
}
