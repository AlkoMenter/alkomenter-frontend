import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {apiGulpDto} from "@shared/api/models/api-gulp-dto";
import {UiKitModule} from "@shared/ui-kit/ui-kit.module";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-gulps-table',
  standalone: true,
  imports: [CommonModule, UiKitModule],
  templateUrl: './gulps-table.component.html',
  styleUrls: ['./gulps-table.component.scss']
})
export class GulpsTableComponent {
  dataSource = new MatTableDataSource<apiGulpDto>();

  @Input() set gulps(gulps: apiGulpDto[] | undefined | null) {
    console.log(gulps)
    if (gulps) {
      this.dataSource.data = gulps;
    }
  }
}
