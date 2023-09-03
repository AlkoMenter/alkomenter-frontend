import {Component} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-booze-page',
  templateUrl: './create-booze-page.component.html',
  styleUrls: ['./create-booze-page.component.scss']
})
export class CreateBoozePageComponent {
  constructor(private snackBar: MatSnackBar) {
    setTimeout(() => {
      this.snackBar.open('Разрешите  показывать вам уведомления?', 'Конечно', {
        duration: 0,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      })
    }, 6)
  }
}
