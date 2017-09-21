import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private loggedIn: Subject<boolean> = new Subject<boolean>();

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: Http) {
    this.loggedIn.next(!!localStorage.getItem('currentUser'))
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

}
