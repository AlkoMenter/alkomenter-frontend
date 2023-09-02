import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignUpFormComponent} from './components/sign-up-form/sign-up-form.component';
import {UiKitModule} from "@shared/ui-kit/ui-kit.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SignUpFormComponent
  ],
  exports: [SignUpFormComponent],
    imports: [
        CommonModule,
        UiKitModule,
        ReactiveFormsModule
    ]
})
export class SignUpFormModule {
}
