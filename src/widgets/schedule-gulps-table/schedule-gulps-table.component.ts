import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {apiScheduleGulpDto} from "@shared/api/models/api-schedule-gulp-dto";
import {MatTableDataSource} from "@angular/material/table";
import {UiKitModule} from "@shared/ui-kit/ui-kit.module";
import {apiScheduleDrinkDto} from "@shared/api/models/api-schedule-drink-dto";
import { apiDrinkDto } from '@shared/api/models/api-drink-dto';

export interface ScheduleGulp {
    name: string | null;
    time: Date | null;
    volume: number | null;
}

@Component({
    selector: 'app-schedule-gulps-table',
    standalone: true,
    imports: [CommonModule, UiKitModule],
    templateUrl: './schedule-gulps-table.component.html',
    styleUrls: ['./schedule-gulps-table.component.scss']
})
export class ScheduleGulpsTableComponent implements OnInit {
    @Input() data: ScheduleGulp[] = [];
    dataSource = new MatTableDataSource<ScheduleGulp>()
    displayedColumns = ['name', 'time', 'volume'];

  ngOnInit() {
      this.dataSource.data = this.data;
    }
}
