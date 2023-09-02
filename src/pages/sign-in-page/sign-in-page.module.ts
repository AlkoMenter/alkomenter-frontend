import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInPageRoutingModule } from './sign-in-page-routing.module';
import { SignInPageComponent } from './containers/sign-in-page/sign-in-page.component';
import {SignInFormModule} from "@widgets/sign-in-form/sign-in-form.module";


@NgModule({
  declarations: [
    SignInPageComponent
  ],
  imports: [
    CommonModule,
    SignInPageRoutingModule,
    SignInFormModule
  ]
})
export class SignInPageModule { }
