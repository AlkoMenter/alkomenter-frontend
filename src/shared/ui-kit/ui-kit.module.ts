import {NgModule} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ErrorStateMatcher, MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AppErrorStateMatcher} from "@shared/ui-kit/utils/app-error-state-matcher";

export const modules = [
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule
]

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    {
      provide: ErrorStateMatcher,
      useClass: AppErrorStateMatcher
    }
  ]
})
export class UiKitModule {
}
