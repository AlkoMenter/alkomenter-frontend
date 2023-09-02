import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateBoozePageRoutingModule } from './create-booze-page-routing.module';
import { CreateBoozePageComponent } from './containers/create-booze-page/create-booze-page.component';
import {CreateBoozeFormModule} from "@widgets/create-booze-form/create-booze-form.module";


@NgModule({
  declarations: [
    CreateBoozePageComponent
  ],
  imports: [
    CommonModule,
    CreateBoozePageRoutingModule,
    CreateBoozeFormModule
  ]
})
export class CreateBoozePageModule { }
