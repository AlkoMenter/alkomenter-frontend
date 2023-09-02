import {BehaviorSubject, map} from "rxjs";

export abstract class EntityService<TEntity, TEntityId = number> {
  entities$ = new BehaviorSubject<Record<string, TEntity>>({});
  list$ = this.entities$.pipe(
    map((entities) => Object.values(entities))
  )

  abstract getId: (entity: TEntity) => TEntityId;

  setEntities(entities: TEntity[]) {
    const entitiesToAdd: Record<string, TEntity> = {};
    entities.forEach(entity => {
      const id = this.getId(entity);
      if (id) {
        entitiesToAdd[id.toString()] = entity;
      }
    })

    this.entities$.next(entitiesToAdd);
  }
}
