import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "@entities/auth/services/auth.service";
import {UiKitModule} from "@shared/ui-kit/ui-kit.module";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-profile-small',
  standalone: true,
  imports: [CommonModule, UiKitModule, RouterLink],
  templateUrl: './profile-small.component.html',
  styleUrls: ['./profile-small.component.scss']
})
export class ProfileSmallComponent {

  profile$ = this.authService.account$;

  constructor(
    private authService: AuthService
  ) {
  }

  logout() {
    this.authService.logout()
  }
}
