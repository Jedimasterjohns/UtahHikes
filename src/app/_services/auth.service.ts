import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GlobalEventsManagerService } from './global-events-manager.service';
import { CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService implements CanActivate {

 
  constructor(private http: Http, private globalEventsManager: GlobalEventsManagerService) {
   }

  login(username: string, password: string) {
    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        // login successful if there's a rkj token in the response
        let user = response.json();
        if (user && user.token) {
          // store user details and rkj token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  canActivate() {
    if (localStorage.getItem('currentUser')) {
      this.globalEventsManager.loggedInNavBar(true);
      return true;
    }
    else {  this.globalEventsManager.loggedInNavBar(false);  }
  }

}
