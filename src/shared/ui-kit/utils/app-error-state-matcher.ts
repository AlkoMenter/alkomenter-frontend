import {ErrorStateMatcher} from "@angular/material/core";
import {AbstractControl, FormGroupDirective, NgForm} from "@angular/forms";

export class AppErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

}
