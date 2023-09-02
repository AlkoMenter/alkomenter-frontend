import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/main-page').then(m => m.MainPageModule)
  },
  {
    path: 'boozes/create',
    loadChildren: () => import('@pages/create-booze-page').then(m => m.CreateBoozePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
