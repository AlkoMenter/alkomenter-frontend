import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {apiScheduleGulpDto} from "@shared/api/models/api-schedule-gulp-dto";
import {MatTableDataSource} from "@angular/material/table";
import {UiKitModule} from "@shared/ui-kit/ui-kit.module";
import {apiScheduleDrinkDto} from "@shared/api/models/api-schedule-drink-dto";

export interface Gulp {
    drink: string;
    gulpTime: Date;
    size: number;
}

@Component({
    selector: 'app-schedule-gulps-table',
    standalone: true,
    imports: [CommonModule, UiKitModule],
    templateUrl: './schedule-gulps-table.component.html',
    styleUrls: ['./schedule-gulps-table.component.scss']
})
export class ScheduleGulpsTableComponent {
    dataSource = new MatTableDataSource<Gulp>()
    displayedColumns = ['drink', 'gulpTime', 'size'];

    @Input() set gulps(drinks: Gulp[]) {
        this.dataSource.data = drinks;
    }

    constructor() {
        this.dataSource.data = [
            {
                drink: 'Джин',
                gulpTime: new Date('2023-01-26 19:00:54'),
                size: 40
            },
            {
                drink: 'Джин',
                gulpTime: new Date('2023-01-26  19:20:45'),
                size: 40
            },
            {
                drink: 'Джин',
                gulpTime: new Date('2023-01-26  19:32:12'),
                size: 40
            },
            {
                drink: 'Джин',
                gulpTime: new Date('2023-01-26  19:47:32'),
                size: 40
            }
        ]
    }
}
