import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import {UiKitModule} from "@shared/ui-kit/ui-kit.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SignInFormComponent
  ],
  exports: [
    SignInFormComponent
  ],
  imports: [
    CommonModule,
    UiKitModule,
    ReactiveFormsModule
  ]
})
export class SignInFormModule { }
