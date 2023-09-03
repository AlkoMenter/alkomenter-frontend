import {Inject, Injectable} from '@angular/core';
import {AuthApi} from "@shared/api/services/auth-api";
import {SignInDto} from "@entities/auth/model/dtos/sign-in.dto";
import {SignUpDto} from "@entities/auth/model/dtos/sign-up.dto";
import {BehaviorSubject, take} from "rxjs";
import {Router} from "@angular/router";
import {LocalStorage} from "@shared/utility/local-storage.provider";
import {apiRegistrationRequest} from "@shared/api/models/api-registration-request";
import {apiLoginRequest} from "@shared/api/models/api-login-request";
import {AccountEntity} from "@entities/auth/model/account.entity";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  account$ = new BehaviorSubject<AccountEntity | null>(null)


  constructor(
    private auth: AuthApi,
    private router: Router,
    @Inject(LocalStorage) private localStorage: Storage
  ) {
    const account = this.localStorage.getItem('account');

    if (account) {
      this.account$.next(JSON.parse(account));
    }
  }

  signIn(signInDto: SignInDto) {
    this.auth.apiAuthLoginPost$Json({body: signInDto as apiLoginRequest})
      .pipe(
        take(1),
      )
      .subscribe((accountDto) => {
        this.account$.next(accountDto as AccountEntity);
        this.localStorage.setItem('account', JSON.stringify(accountDto));
        this.router.navigate(['/']);
      })
  }

  signUp(signUpDto: SignUpDto) {
    this.auth.apiAuthRegistrationPost$Json({body: signUpDto as apiRegistrationRequest})
      .pipe((take(1)))
      .subscribe(() => {
        this.signIn({login: signUpDto.login, password: signUpDto.password} as SignInDto);
      })
  }
}
