import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { GlobalEventsManagerService } from "../global-events-manager.service"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [GlobalEventsManagerService]
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, private _router: Router,
   private globalEventsManager: GlobalEventsManagerService) {
    this.message = '';
   }

  login(username: string, password: string): boolean  {
    this.message = '';
    if (!this.authService.login(username, password))  {
      this.message = 'Incorrect credentials.';
      setTimeout(function() {
        this.message = '';
      }.bind(this), 2500);
    }
    return false;
    
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }

  private onLoginSuccessfully(data: any) : void {
    this.globalEventsManager.showNavBar(true);
    this._router.navigate(['Home']);
  }
}
