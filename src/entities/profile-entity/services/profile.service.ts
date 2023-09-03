import {Injectable} from '@angular/core';
import {BehaviorSubject, take} from "rxjs";
import {ProfileEntity} from "@entities/profile-entity/model/profile.entity";
import {ProfileApi} from "@shared/api/services/profile-api";
import {apiProfileDto} from "@shared/api/models/api-profile-dto";
import {UpdateProfileDto} from "@entities/profile-entity/model/dtos/update-profile.dto";
import {apiEditProfileRequest} from "@shared/api/models/api-edit-profile-request";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile$ = new BehaviorSubject<ProfileEntity | null>(null)

  constructor(
    private profileApi: ProfileApi
  ) {
  }

  getProfileInfo(userId: string) {
    this.profileApi.apiProfileGetInfoGet$Json({userId})
      .pipe(
        take(1)
      )
      .subscribe((profile: apiProfileDto) => {
        this.profile$.next(profile);
      })
  }

  updateProfile(updateProfileDto: UpdateProfileDto) {
    this.profileApi.apiProfileEditProfilePost({
      body: updateProfileDto as apiEditProfileRequest
    })
      .pipe(
        take(1)
      )
      .subscribe(() => {
        this.profile$.next({
          id: updateProfileDto.accountId,
          age: updateProfileDto.age,
          gender: updateProfileDto.gender,
          name: updateProfileDto.name,
          weight: updateProfileDto.weight
        })
      })
  }

  updateNotifyToken(profileId: string, notifyToken: string) {
    return this.profileApi.apiProfileUpdateNotifyTokenPost({
      body: {
        profileId,
        notifyToken
      }
    })
  }
}
