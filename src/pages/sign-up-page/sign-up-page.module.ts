import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignUpPageRoutingModule} from './sign-up-page-routing.module';
import {SignUpPageComponent} from './containers/sign-up-page/sign-up-page.component';
import {SignUpFormModule} from "@widgets/sign-up-form/sign-up-form.module";


@NgModule({
  declarations: [
    SignUpPageComponent
  ],
  imports: [
    CommonModule,
    SignUpPageRoutingModule,
    SignUpFormModule
  ]
})
export class SignUpPageModule {
}
