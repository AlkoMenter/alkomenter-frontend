import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/main-page').then(m => m.MainPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('@pages/sign-in-page').then(m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('@pages/sign-up-page').then(m => m.SignUpPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
