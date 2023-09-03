import {Component} from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import {BoozeDto, BoozeEntityService} from "@entities/boozes-entity";
import {FormGroupOf} from "@shared/utility";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-booze-form',
  templateUrl: './create-booze-form.component.html',
  styleUrls: ['./create-booze-form.component.scss']
})
export class CreateBoozeFormComponent {
  public boozeForm = this.fb.group<FormGroupOf<BoozeDto>>({
    profileId: this.fb.control(null),
    startTime: this.fb.control(undefined, [Validators.required]),
    stopTime: this.fb.control(null),
    stageId: this.fb.control('3fa85f64-5717-4562-b3fc-2c963f66afa6'),
    currentProMille: this.fb.control(0),
    selectedDrinkIds: this.fb.control(['3fa85f64-5717-4562-b3fc-2c963f66afa6'])
  });
  get selectedDrinkIds(): FormControl<any> {
    return this.boozeForm.get('selectedDrinkIds') as FormControl<any>;
  }
  drinkList = [
    { id: '3fa85f64-5717-4562-b3fc-2c963f66afa6', name: 'Пиво' },
    { id: '3fa85f64-5717-4562-b3fc-2c963f66afa6', name: 'Вино' }
  ]

  constructor(
    protected fb: FormBuilder,
    private boozeEntityService: BoozeEntityService,
    private readonly router: Router
  ) {
  }

  submit() {
    if (this.boozeForm.valid) {
      this.boozeEntityService.createBooze(this.getBoozeData()).subscribe(
        ({ id }) => this.router.navigate(['boozes/progress']),
        (error) => this.router.navigate(['boozes/progress']), // TODO заменить navigate
      )
    }
  }

  getBoozeData(): BoozeDto {
    return this.boozeForm.value as BoozeDto
  }
}
