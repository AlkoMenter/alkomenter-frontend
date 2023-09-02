import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "@entities/auth/services/auth.service";
import {SignUpDto} from "@entities/auth/model/dtos/sign-up.dto";
import {FormGroupOf} from "@shared/utility";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent {
  form = this.fb.group<FormGroupOf<SignUpDto>>({
    login: this.fb.control(null, [Validators.required]),
    password: this.fb.control(null, [Validators.required, Validators.minLength(4)]),
    name: this.fb.control(null, [Validators.required]),
    age: this.fb.control(null, [Validators.min(18)]),
    weight: this.fb.control(null, [Validators.required]),
    gender: this.fb.control(true)
  })

  agreementCheckbox = this.fb.control(false, [Validators.required])

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) {
  }

  signUp() {
    if (this.form.valid) {
      this.auth.signUp(this.form.value as SignUpDto);
    }
  }
}
