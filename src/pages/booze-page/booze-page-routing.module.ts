import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { BoozePageComponent } from '@pages/booze-page/booze-page.component';

const routes: Routes = [
  {
    path: '',
    component: BoozePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoozePageRoutingModule {

}
