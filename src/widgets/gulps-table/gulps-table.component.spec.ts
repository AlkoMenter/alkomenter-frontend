import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GulpsTableComponent } from './gulps-table.component';

describe('GulpsTableComponent', () => {
  let component: GulpsTableComponent;
  let fixture: ComponentFixture<GulpsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GulpsTableComponent]
    });
    fixture = TestBed.createComponent(GulpsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
