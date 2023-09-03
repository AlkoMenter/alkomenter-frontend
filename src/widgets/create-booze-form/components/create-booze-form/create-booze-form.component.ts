import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
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
    id: this.fb.control(null),
    startDate: this.fb.control(undefined, [Validators.required]),
    idStage: this.fb.control(null),
    idDrink: this.fb.control(null),
    stopDate: this.fb.control(null)
  });

  constructor(
    protected fb: FormBuilder,
    private boozeEntityService: BoozeEntityService,
    private readonly router: Router
  ) {
  }

  submit() {
    if (this.boozeForm.valid) {
      this.boozeEntityService.createBooze(this.getBoozeData()).subscribe(
        ({ id }) => this.router.navigate(['boozes/progress'])
      )
    }
  }

  getBoozeData(): BoozeDto {
    return this.boozeForm.value as BoozeDto
  }
}
