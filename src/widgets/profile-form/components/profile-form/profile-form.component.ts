import {Component, DestroyRef} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {FormGroupOf} from "@shared/utility";
import {ProfileEntity} from "@entities/profile-entity/model/profile.entity";
import {ProfileService} from "@entities/profile-entity/services/profile.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {UpdateProfileDto} from "@entities/profile-entity/model/dtos/update-profile.dto";
import {AuthService} from "@entities/auth/services/auth.service";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent {
  form = this.fb.group<FormGroupOf<UpdateProfileDto>>({
    id: this.fb.control(null),
    accountId: this.fb.control(null),
    name: this.fb.control(null),
    age: this.fb.control(null),
    weight: this.fb.control(null),
    gender: this.fb.control(null)
  });

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private destroyRef: DestroyRef,
    private auth: AuthService
  ) {
    this.profileService.profile$.pipe(
      takeUntilDestroyed(this.destroyRef)
    )
      .subscribe((profile) => {
        if (profile) {
          this.form.patchValue({...profile, accountId: profile.id});
        }
      })
    const userId = this.auth.account$.value?.id;
    if (userId) {
      this.profileService.getProfileInfo(userId)
    }

  }

  saveProfile() {
    if (this.form.valid) {
      this.profileService.updateProfile(this.form.value as UpdateProfileDto);
    }
  }
}
