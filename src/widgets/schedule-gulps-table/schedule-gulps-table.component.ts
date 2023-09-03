import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {apiScheduleGulpDto} from "@shared/api/models/api-schedule-gulp-dto";
import {MatTableDataSource} from "@angular/material/table";
import {UiKitModule} from "@shared/ui-kit/ui-kit.module";
import {apiScheduleDrinkDto} from "@shared/api/models/api-schedule-drink-dto";

@Component({
  selector: 'app-schedule-gulps-table',
  standalone: true,
  imports: [CommonModule, UiKitModule],
  templateUrl: './schedule-gulps-table.component.html',
  styleUrls: ['./schedule-gulps-table.component.scss']
})
export class ScheduleGulpsTableComponent {
  dataSource = new MatTableDataSource<apiScheduleDrinkDto>()

  @Input() set gulps(drinks: apiScheduleDrinkDto[] | null | undefined) {
    const gulps: any[] = []
    drinks?.forEach(drink => {
      drink.scheduledGulps?.forEach(gulp => {
        gulps.push({...gulp, drink})
      })
    })

    console.log(gulps)
    // this.dataSource.data = ;
  }
}
