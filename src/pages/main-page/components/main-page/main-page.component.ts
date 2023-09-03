import { Component, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnDestroy {
  clockTime = new Date();
  interval = interval(1000).subscribe(() => this.clockTime = new Date())

  constructor(private readonly router: Router) {}

  public createDrinking(): void {
    this.router.navigate(['boozes/create'])
  }

  ngOnDestroy() {
    this.interval.unsubscribe();
  }
}
