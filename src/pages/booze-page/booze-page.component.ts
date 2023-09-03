import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { BoozeEntityService } from '@entities/boozes-entity';
import { DrinksService } from '@entities/drink-entity/services/drinks.service';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-booze-page',
  templateUrl: './booze-page.component.html',
  styleUrls: ['./booze-page.component.scss']
})
export class BoozePageComponent implements OnInit, OnDestroy {
  docStyle = document.documentElement.style;
  amountAlcoholDrunk = 0;
  remainingSeconds = '00';
  remainingMinutes = '10';
  start = 235;
  end = 5;
  boozeInfo: any;

  boozeA = [
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
  ];
  boozeB = [
    {
      drink: 'Джин',
      gulpTime: new Date('2023-01-26 18:37:12'),
      size: 40
    },
    {
      drink: 'Джин',
      gulpTime: new Date('2023-01-26  18:06:42'),
      size: 40
    },
  ];

  get isBottleEmpty () {
    return this.start > this.end;
  }

  constructor(private readonly boozeEntityService: BoozeEntityService, private readonly drinksService: DrinksService, private snackBar: MatSnackBar) {
  }

  public ngOnInit(): void {
    interval(1000).subscribe(() => { this.changeTimer() })
    this.docStyle.setProperty('--start', `translateY(${this.start}px)`);
    this.docStyle.setProperty('--end', `translateY(${this.end}px)`);
    this.boozeEntityService.boozeData$.subscribe(data => {
      this.boozeInfo = data
    })
    setTimeout(() => {
      this.snackBar.open('Время выпить!', 'Конечно', {
        duration: 0,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      })
    }, 60000)
  }

  // currentBottleStep

  public ngOnDestroy() {}

  onChangeTimer(time: string) {
    if (time.length) {
      return {
        remainingMinutes: time[1] ? time[0] + time[1]: `0${time[0]}`,
        remainingSeconds: time[3] ? time[2] + time[3]: time[2] ? `0${time[2]}` : this.remainingSeconds
      }
    }

    return null;
  }

  public drink(): void {
    this.boozeEntityService.drink({
      boozeId: this.boozeInfo.id as string,
      drinkId: this.boozeInfo.schedule.scheduledDrinks[0].drink.id
    }).subscribe((val) => {
      this.boozeInfo = val;
      this.changeBottle();
    })
  }

  changeBottle() {
    this.amountAlcoholDrunk++;
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
    if (Number(this.remainingSeconds)) {
      const nextSecond = String(Number(this.remainingSeconds) - 1);
      this.remainingSeconds = nextSecond.length > 1 ? nextSecond : `0${nextSecond}`;
    } else {
      this.remainingSeconds = '59';
      if (Number(this.remainingMinutes)) {
        const nextMinutes = String(Number(this.remainingMinutes) - 1);
        this.remainingMinutes = nextMinutes.length > 1 ? nextMinutes : `0${nextMinutes}`;
      } else {
        this.remainingMinutes = '59';
      }
    }
  }
}
