import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BoozePageComponent } from '../booze-page/booze-page.component';
import { UiKitModule } from '@shared/ui-kit/ui-kit.module';
import { BoozePageRoutingModule } from '@pages/booze-page/booze-page-routing.module';


@NgModule({
  declarations: [
    BoozePageComponent
  ],
  imports: [
    CommonModule,
    BoozePageRoutingModule,
    UiKitModule,
  ]
})
export class BoozePageModule {
}
