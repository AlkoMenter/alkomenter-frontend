import {Injectable} from '@angular/core';
import {EntityService} from "@shared/utility";
import {DrinkEntity} from "@entities/drink-entity/model/drink.entity";
import {CreateDrinkDto} from "@entities/drink-entity/model/dtos/create-drink.dto";
import {DrinkApi} from "@shared/api/services/drink-api";
import {take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DrinksService extends EntityService<DrinkEntity, string> {
  getId = (drink: DrinkEntity) => drink.id

  constructor(
    private drinks: DrinkApi
  ) {
    super()
  }

  createDrink(createDrinkDto: CreateDrinkDto) {
    this.drinks.apiDrinkCreateDrinkPost$Json({body: createDrinkDto})
      .pipe(
        take(1)
      )
      .subscribe();
  }
}
