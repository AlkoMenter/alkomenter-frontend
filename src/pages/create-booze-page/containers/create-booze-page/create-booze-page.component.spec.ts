import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBoozePageComponent } from './create-booze-page.component';

describe('CreateBoozePageComponent', () => {
  let component: CreateBoozePageComponent;
  let fixture: ComponentFixture<CreateBoozePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBoozePageComponent]
    });
    fixture = TestBed.createComponent(CreateBoozePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
