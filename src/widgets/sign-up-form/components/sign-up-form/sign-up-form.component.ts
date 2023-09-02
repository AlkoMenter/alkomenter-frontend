import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent {
  form = this.fb.group({
    login: this.fb.control(null),
    password: this.fb.control(null),
    name: this.fb.control(null),
    age: this.fb.control(null),
    weight: this.fb.control(null),
    gender: this.fb.control(null)
  })

  constructor(
    private fb: FormBuilder
  ) {
  }
}
