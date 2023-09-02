import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateBoozeFormComponent} from '@widgets/create-booze-form/components';
import {ReactiveFormsModule} from "@angular/forms";
import {UiKitModule} from "@shared/ui-kit/ui-kit.module";


@NgModule({
  declarations: [
    CreateBoozeFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiKitModule
  ],
  exports: [
    CreateBoozeFormComponent
  ]
})
export class CreateBoozeFormModule {
}
