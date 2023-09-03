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
    path: 'boozes',
    children: [
      {
        path: 'create',
        loadChildren: () => import('@pages/create-booze-page').then(m => m.CreateBoozePageModule),
        canActivate: [authGuard]
      },
      {
        path: 'progress',
        loadChildren: () => import('@pages/booze-page').then(m => m.BoozePageModule),
        canActivate: [authGuard]
      },
    ]
  },
  {
    path: 'sign-in',
    loadChildren: () => import('@pages/sign-in-page').then(m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('@pages/sign-up-page').then(m => m.SignUpPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('@pages/profile-page').then(m => m.ProfilePageModule),
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
