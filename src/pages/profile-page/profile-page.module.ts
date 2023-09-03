import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfilePageComponent } from './containers/profile-page/profile-page.component';
import {ProfileFormModule} from "@widgets/profile-form/profile-form.module";


@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    ProfileFormModule
  ]
})
export class ProfilePageModule { }
