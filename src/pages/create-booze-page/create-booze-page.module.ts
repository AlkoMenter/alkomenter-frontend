import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateBoozePageRoutingModule } from './create-booze-page-routing.module';
import { CreateBoozePageComponent } from './containers/create-booze-page/create-booze-page.component';


@NgModule({
  declarations: [
    CreateBoozePageComponent
  ],
  imports: [
    CommonModule,
    CreateBoozePageRoutingModule
  ]
})
export class CreateBoozePageModule { }
