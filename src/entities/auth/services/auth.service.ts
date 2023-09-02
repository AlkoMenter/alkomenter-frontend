import {Injectable} from '@angular/core';
import {AuthApi} from "@shared/api/services/auth-api";
import {SignInDto} from "@entities/auth/model/dtos/sign-in.dto";
import {SignUpDto} from "@entities/auth/model/dtos/sign-up.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AuthApi
  ) {
  }

  signIn(signInDto: SignInDto) {
    this.auth.apiAuthLoginPost$Json({body: signInDto})
  }

  signUp(signUpDto: SignUpDto) {
    this.auth.apiAuthRegistrationPost({body: signUpDto})
  }
}
