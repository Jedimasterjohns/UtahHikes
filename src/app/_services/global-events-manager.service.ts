import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class GlobalEventsManagerService {
  public loggedInNavBar: EventEmitter<any> = new EventEmitter();

}
