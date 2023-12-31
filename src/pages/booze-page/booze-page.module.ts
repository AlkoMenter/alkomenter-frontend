import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BoozePageComponent } from '../booze-page/booze-page.component';
import { UiKitModule } from '@shared/ui-kit/ui-kit.module';
import { BoozePageRoutingModule } from '@pages/booze-page/booze-page-routing.module';
import {GulpsTableComponent} from "@widgets/gulps-table/gulps-table.component";
import {ScheduleGulpsTableComponent} from "@widgets/schedule-gulps-table/schedule-gulps-table.component";


@NgModule({
  declarations: [
    BoozePageComponent
  ],
  imports: [
    CommonModule,
    BoozePageRoutingModule,
    UiKitModule,
    GulpsTableComponent,
    ScheduleGulpsTableComponent,
  ]
})
export class BoozePageModule {
}
