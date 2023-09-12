import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { BoozeEntityService } from '@entities/boozes-entity';
import { DrinksService } from '@entities/drink-entity/services/drinks.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { apiDrinkDto } from '@shared/api/models/api-drink-dto';
import { ScheduleGulp } from '@widgets/schedule-gulps-table/schedule-gulps-table.component';
import { apiBoozeDto } from '@shared/api/models/api-booze-dto';


@Component({
  selector: 'app-booze-page',
  templateUrl: './booze-page.component.html',
  styleUrls: ['./booze-page.component.scss']
})
export class BoozePageComponent implements OnInit {
  docStyle = document.documentElement.style;

  isStopTimer = true;
  remainingDrinkTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    day: '0'
  }
  remainingDrinkTimeData = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    day: '0'
  }

  start = 235;
  end = 5;

  boozeInfo: apiBoozeDto | undefined;
  scheduleDrinkList: ScheduleGulp[] = [];
  gulpsDrinksList: ScheduleGulp[] = [];
  targetBooz: string | undefined | null = 'Умереное';
  currentProMille: number | undefined | null = 0;

  get isBottleEmpty () {
    return this.start > this.end;
  }

  constructor(private readonly boozeEntityService: BoozeEntityService, private readonly drinksService: DrinksService, private readonly snackBar: MatSnackBar) {}

  public ngOnInit(): void {
    interval(1000).subscribe(() => this.boozeInfo && !this.isStopTimer && this.changeTimer());

    this.docStyle.setProperty('--start', `translateY(${this.start}px)`);
    this.docStyle.setProperty('--end', `translateY(${this.end}px)`);

    this.boozeEntityService.boozeData$.subscribe(data => this.boozeInfo = data as apiBoozeDto);

    setTimeout(() => {
      this.snackBar.open('Время выпить!', 'Конечно', {
        duration: 0,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      })
    }, 60000)

    this.calculateTimer('Thu Sep 07 2023 10:00:00')
  }

  public drink(): void {
    const boozeId = this.boozeInfo?.id || '';
    // @ts-ignore
    const scheduledDrinks = this.boozeInfo?.schedule?.scheduledDrinks[0].drink|| []; // [0].drink.id
    // @ts-ignore
    const drinkId = scheduledDrinks.id; // scheduledDrinks

    this.boozeEntityService.drink({ boozeId, drinkId })
      .subscribe((value) => this.onChangeBoozeData(value));

    this.snackBar.open('Ваш прием алкоголя был учтен!', '', { horizontalPosition: 'center', verticalPosition: 'top' })
  }

  onChangeBoozeData(data: apiBoozeDto) {
    this.boozeInfo = data;
    this.targetBooz = data.stage?.name;
    this.currentProMille = data.currentProMille;
    // @ts-ignore
    this.gulpsDrinksList = data.gulps?.map((el) => {
      return {
        name: el.drink?.name || null,
        time: new Date(el.gulpTime as string) || null,
        volume: el.size || null
      }
    });
    // @ts-ignore
    this.scheduleDrinkList = data.schedule?.scheduledDrinks?.map((el) => {
      const scheduledGulp = el.scheduledGulps || [];
      return {
        name: el.drink?.name || null,
        time: new Date(scheduledGulp[0].gulpTime || '') || null,
        volume: scheduledGulp[0].size || null
      }
    });
    this.changeBottle();
    this.calculateTimer(data?.stopTime as string);
  }

  calculateTimer(endTime: string) {
    this.isStopTimer = false;

    const startTimestamp = new Date().getTime();
    const stopTimestamp = new Date(endTime).getTime();

    let seconds = Math.floor((stopTimestamp - startTimestamp) / 1000);
    let minutes = seconds ? Math.floor(seconds / 60) : 0;
    let hours = minutes ? Math.floor(minutes / 60) : 0;
    let day = hours ? Math.floor(minutes / 24) : 0;
    seconds = seconds <= 0 ? 0 : seconds;
    minutes = minutes <= 0 ? 0 : minutes;
    hours = hours <= 0 ? 0 : hours;
    day = day <= 0 ? 0 : day;

    if (day) {
      this.remainingDrinkTime.day = this.decrement(day);
      this.remainingDrinkTime.hours = '24';
      this.remainingDrinkTime.minutes = '59';
      this.remainingDrinkTime.seconds = '59';
    } else if (hours) {
      this.remainingDrinkTime.day = '00';
      this.remainingDrinkTime.hours = this.decrement(hours);
      this.remainingDrinkTime.minutes = '59';
      this.remainingDrinkTime.seconds = '59';
    } else if (minutes) {
      this.remainingDrinkTime.day = '00';
      this.remainingDrinkTime.hours = '00';
      this.remainingDrinkTime.minutes = this.decrement(minutes);
      this.remainingDrinkTime.seconds = '59';
    } else if (seconds) {
      this.remainingDrinkTime.day = '00';
      this.remainingDrinkTime.hours = '00';
      this.remainingDrinkTime.minutes = '00';
      this.remainingDrinkTime.seconds = this.decrement(seconds);
    } else {
      this.isStopTimer = true;
    }
  }

  changeBottle() {
    this.end = this.end + 23;
    this.docStyle.setProperty('--start', `translateY(${this.start}px)`);
    this.docStyle.setProperty('--end', `translateY(${this.end}px)`);
    if (!this.isBottleEmpty) {
      setTimeout(() => {
        this.start = 235;
        this.end = 5;
        this.docStyle.setProperty('--start', `translateY(${this.start}px)`);
        this.docStyle.setProperty('--end', `translateY(${this.end}px)`);
      }, 500);
    }
  }

  changeTimer() {
    if (this.isStopTimer) {
      return;
    }

    let seconds = Number(this.remainingDrinkTime.seconds);
    let minutes = Number(this.remainingDrinkTime.minutes);
    let hours = Number(this.remainingDrinkTime.hours);
    let day = Number(this.remainingDrinkTime.day);

    if (!seconds && !minutes && !hours && !day)  {
      this.isStopTimer = true;
      this.remainingDrinkTime.seconds = '00';
      this.remainingDrinkTime.minutes = '00';
      this.remainingDrinkTime.hours = '00';
      this.remainingDrinkTime.day = '00';
    }

    this.remainingDrinkTime.seconds = seconds
      ? this.decrement(seconds)
      : this.remainingDrinkTimeData.seconds;

    this.remainingDrinkTime.minutes = !seconds
      ? this.decrement(minutes)
        ? this.decrement(minutes)
        : this.remainingDrinkTimeData.minutes
      : '00';

    this.remainingDrinkTime.hours = !minutes
      ? this.decrement(hours)
        ? this.decrement(hours)
        : this.remainingDrinkTimeData.hours
      : '00';


    this.remainingDrinkTime.day = !hours
      ? this.decrement(day)
        ? this.decrement(day)
        : this.remainingDrinkTimeData.day
      : '00';

  }

  decrement = (n: number): string => {
    const val = n - 1;
    return String(val).length > 1 ? String(val) : `0${val}`
  }
}
