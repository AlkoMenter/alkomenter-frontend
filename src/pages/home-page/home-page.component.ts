import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  docStyle = document.documentElement.style;
  isLoading = false;
  isDrinkingEventCreated = false;
  dateTime = new Date();
  amountAlcoholDrunk = 0;
  remainingSeconds = '00';
  remainingMinutes = '10';
  start = 235;
  end = 5;

  get isBottleEmpty () {
    return this.start > this.end;
  }

  public ngOnInit(): void {
    interval(1000).subscribe(() => {
      if (!this.isDrinkingEventCreated) { this.dateTime = new Date(); }
      this.changeTimer();
    })
    this.docStyle.setProperty('--start', `translateY(${this.start}px)`);
    this.docStyle.setProperty('--end', `translateY(${this.end}px)`);
  }

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

  public createDrinking(): void {
    this.isDrinkingEventCreated = !this.isDrinkingEventCreated;
  }

  public drink(): void {
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
