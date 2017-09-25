import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GlobalEventsManagerService {
  private _loggedInNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public loggedInNavBarEmitter: Observable<boolean> = this._loggedInNavBar.asObservable();


constructor() {}

loggedInNavBar(ifShow: boolean) {
  this._loggedInNavBar.next(ifShow);
}

}
