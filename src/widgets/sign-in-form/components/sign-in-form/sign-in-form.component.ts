import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {FormGroupOf} from "@shared/utility";
import {SignInDto} from "@entities/auth/model/dtos/sign-in.dto";
import {AuthService} from "@entities/auth/services/auth.service";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {
  formGroup = this.fb.group<FormGroupOf<SignInDto>>({
    login: this.fb.control(null, [Validators.required]),
    password: this.fb.control(null, [Validators.required, Validators.minLength(4)])
  })

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) {
  }

  signIn() {
    if (this.formGroup.valid) {
      this.auth.signIn(this.formGroup.value as SignInDto)
    }
  }
}
