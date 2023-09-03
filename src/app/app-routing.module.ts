import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/main-page').then(m => m.MainPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'boozes/create',
    loadChildren: () => import('@pages/create-booze-page').then(m => m.CreateBoozePageModule),
    canActivate: [authGuard]
  },
  {
    path: 'boozes/progress',
    loadChildren: () => import('@pages/booze-page').then(m => m.BoozePageModule),
    canActivate: [authGuard]
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
