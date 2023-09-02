import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  CreateBoozePageComponent
} from "@pages/create-booze-page/containers/create-booze-page/create-booze-page.component";

const routes: Routes = [
  {
    path: '',
    component: CreateBoozePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateBoozePageRoutingModule {
}
