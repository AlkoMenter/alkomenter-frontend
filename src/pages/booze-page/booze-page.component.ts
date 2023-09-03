import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { BoozeEntityService } from '@entities/boozes-entity';
import { DrinksService } from '@entities/drink-entity/services/drinks.service';
import { MatSnackBar } from '@angular/material/snack-bar';


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
  boozeInfo: any

  get isBottleEmpty () {
    return this.start > this.end;
  }

  constructor(private readonly boozeEntityService: BoozeEntityService, private readonly drinksService: DrinksService, private readonly snackBar: MatSnackBar) {}

  public ngOnInit(): void {
    interval(60000).subscribe(() => { this.changeTimer() })
    this.docStyle.setProperty('--start', `translateY(${this.start}px)`);
    this.docStyle.setProperty('--end', `translateY(${this.end}px)`);
    this.boozeEntityService.boozeData$.subscribe(data => {
      this.boozeInfo = data
      this.calcTimer();
    })
  }

  public drink(): void {
    this.boozeEntityService.drink({
      boozeId: this.boozeInfo.id as string,
      drinkId: this.boozeInfo.schedule.scheduledDrinks[0].drink.id
    }).subscribe((val) => {
      this.boozeInfo = val;
      this.changeBottle();
    })
    this.snackBar.open('Ваш прием алкоголя был учтен!', '', { horizontalPosition: 'center', verticalPosition: 'top' })
  }

  calcTimer() {
    const startTimeUnix = new Date().getTime();
    const stopTimeUnix = new Date(this.boozeInfo.stopTime).getTime();
    const seconds = (stopTimeUnix - startTimeUnix) / 1000
    const minutes = seconds / 60;
    const hours = Math.round(minutes / 60);
    this.remainingMinutes = String(hours).length < 1 ? `0${hours}` : String(hours);
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

  public ngOnDestroy() {}
}
