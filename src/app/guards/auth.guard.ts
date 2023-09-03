import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "@entities/auth/services/auth.service";
import {inject} from "@angular/core";
import {map, tap} from "rxjs/operators";

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  const router = inject(Router);

  return auth.account$.pipe(
    map(account => account !== null),
    tap((isAuthorized) => {
      if (!isAuthorized) {
        router.navigate(['/sign-in'])
      }
    })
  );
};
