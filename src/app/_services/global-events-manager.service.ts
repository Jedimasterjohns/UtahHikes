import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class GlobalEventsManagerService {
  @Output loggedInNavBar: EventEmitter<boolean> = new EventEmitter();


constructor() {}
}
