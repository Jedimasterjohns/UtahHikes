import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private _loggedInNavBar: BehaviorSubject<boolean>= new BehaviorSubject<boolean>(this.hasCurrentUser());

  constructor(private http: Http) {
   }

  isLoggedIn(): Observable<boolean> {
    return this._loggedInNavBar.asObservable();
  }

  login(username: string, password: string) {
    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        // login successful if there's a rkj token in the response
        let user = response.json();
        if (user && user.token) {
          // store user details and rkj token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this._loggedInNavBar.next(true);
        }

        return user;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this._loggedInNavBar.next(false);
  }

  private hasCurrentUser(): boolean {
    return !!localStorage.getItem('currentUser');
  }


}
