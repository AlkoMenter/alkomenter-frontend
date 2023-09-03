import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileFormComponent} from './components/profile-form/profile-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {UiKitModule} from "@shared/ui-kit/ui-kit.module";


@NgModule({
  declarations: [
    ProfileFormComponent
  ],
  exports: [
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiKitModule
  ]
})
export class ProfileFormModule {
}
