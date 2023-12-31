import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './components/main-page/main-page.component';
import {MainPageRoutingModule} from "@pages/main-page/main-page-routing.module";
import { UiKitModule } from '@shared/ui-kit/ui-kit.module';


@NgModule({
  declarations: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    UiKitModule,
  ]
})
export class MainPageModule {
}
