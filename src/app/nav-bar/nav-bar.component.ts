import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  loggedInNavBar: Observable<boolean>;
  isCollapsed = true;

  constructor(private authService: AuthService) {
    this.loggedInNavBar = authService.isLoggedIn();
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
