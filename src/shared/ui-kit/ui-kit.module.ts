import {NgModule} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ErrorStateMatcher, MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AppErrorStateMatcher} from "@shared/ui-kit/utils/app-error-state-matcher";
import {MatMenuModule} from "@angular/material/menu";
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule, NgxMatTimepickerModule
} from "@angular-material-components/datetime-picker";
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

export const modules = [
  FormsModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatMenuModule,
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
  NgxMatNativeDateModule,
  MatCardModule,
  MatDividerModule
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
