import {Component, DestroyRef} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {BoozeDto, BoozeEntityService} from "@entities/boozes-entity";
import {FormGroupOf} from "@shared/utility";
import {Router} from '@angular/router';
import {filter} from "rxjs/operators";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AuthService} from "@entities/auth/services/auth.service";
import {DrinksService} from "@entities/drink-entity/services/drinks.service";
import {StageService} from "@entities/stage-entity/services/stage.service";

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
  now = new Date();

  get selectedDrinkIds(): FormControl<any> {
    return this.boozeForm.get('selectedDrinkIds') as FormControl<any>;
  }

  get selectedDrinkNames() {
    return (this.selectedDrinkIds.value as [])
      .map(selectedDrinkId => this.drinksService.entities$.value[selectedDrinkId])
      .filter(x => x !== undefined)
      .reduce((acc: Record<string, string>, curr) => {
        if (curr) {
          acc[curr.id] = curr.name
        }
        return acc;
      }, {})
  }


  drinkList$ = this.drinksService.list$;
  stages$ = this.stagesService.list$;

  constructor(
    protected fb: FormBuilder,
    private boozeEntityService: BoozeEntityService,
    private readonly router: Router,
    private authService: AuthService,
    private destroyRef: DestroyRef,
    private drinksService: DrinksService,
    private stagesService: StageService
  ) {
    this.boozeForm.get('startTime')
      ?.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.boozeForm.patchValue({stopTime: this.boozeForm.value.startTime})
      })


    this.authService.account$.pipe(
      filter(x => x !== null),
      takeUntilDestroyed(this.destroyRef)
    )
      .subscribe((account) => {
        if (account?.id) {
          this.boozeForm.get('profileId')?.patchValue(account?.id)
        }
      })
    this.drinksService.getDrinks();
    this.stagesService.getStages();
  }

  submit() {
    if (this.boozeForm.valid) {
      this.boozeEntityService.createBooze(this.getBoozeData()).subscribe(
        ({id}) => this.router.navigate(['boozes/progress']),
        (error) => this.router.navigate(['boozes/progress']), // TODO заменить navigate
      )
    }
  }

  cancel() {
    this.router.navigate(['/'])
  }

  getBoozeData(): BoozeDto {
    return this.boozeForm.value as BoozeDto
  }
}
