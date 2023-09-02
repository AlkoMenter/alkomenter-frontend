import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBoozeFormComponent } from './create-booze-form.component';

describe('CreateBoozeFormComponent', () => {
  let component: CreateBoozeFormComponent;
  let fixture: ComponentFixture<CreateBoozeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBoozeFormComponent]
    });
    fixture = TestBed.createComponent(CreateBoozeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
