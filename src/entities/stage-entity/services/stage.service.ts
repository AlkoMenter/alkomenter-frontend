import {Injectable} from '@angular/core';
import {BehaviorSubject, take} from "rxjs";
import {StageEntity} from "@entities/stage-entity/model/stage.entity";
import {CreateStageDto} from "@entities/stage-entity/model/dtos/create-stage.dto";
import {StageApi} from "@shared/api/services/stage-api";

@Injectable({
  providedIn: 'root'
})
export class StageService {
  stage$ = new BehaviorSubject<StageEntity | null>(null);

  constructor(
    private stageApi: StageApi
  ) {
  }

  createStage(createStageDto: CreateStageDto) {
    this.stageApi.apiStageCreateStagePost$Json({body: createStageDto})
      .pipe(
        take(1)
      )
      .subscribe((stage) => {
        this.stage$.next({
          id: stage.id,
          name: stage.name,
          maxProMille: stage.maxProMille,
          minProMille: stage.minProMille
        });
      })
  }
}
