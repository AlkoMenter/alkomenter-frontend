import {NgModule} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";

export const modules = [
  MatToolbarModule
]

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
  providers: []
})
export class UiKitModule {
}
