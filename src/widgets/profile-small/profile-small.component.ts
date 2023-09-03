import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "@entities/auth/services/auth.service";
import {UiKitModule} from "@shared/ui-kit/ui-kit.module";

@Component({
  selector: 'app-profile-small',
  standalone: true,
  imports: [CommonModule, UiKitModule],
  templateUrl: './profile-small.component.html',
  styleUrls: ['./profile-small.component.scss']
})
export class ProfileSmallComponent {

  profile$ = this.authService.account$;

  constructor(
    private authService: AuthService
  ) {
  }
}
