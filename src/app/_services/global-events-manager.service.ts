import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GlobalEventsManagerService {
  public loggedInNavBar: EventEmitter<boolean> = new EventEmitter();


constructor() {}


}
