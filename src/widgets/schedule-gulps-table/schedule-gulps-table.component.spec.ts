import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleGulpsTableComponent } from './schedule-gulps-table.component';

describe('ScheduleGulpsTableComponent', () => {
  let component: ScheduleGulpsTableComponent;
  let fixture: ComponentFixture<ScheduleGulpsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScheduleGulpsTableComponent]
    });
    fixture = TestBed.createComponent(ScheduleGulpsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
