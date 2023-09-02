import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSmallComponent } from './profile-small.component';

describe('ProfileSmallComponent', () => {
  let component: ProfileSmallComponent;
  let fixture: ComponentFixture<ProfileSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProfileSmallComponent]
    });
    fixture = TestBed.createComponent(ProfileSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
