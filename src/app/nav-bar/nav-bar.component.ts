import { Component } from '@angular/core';
import { GlobalEventsManagerService } from '../_services/global-events-manager.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  loggedInNavBar: boolean= false;

  constructor(private globalEventsManager: GlobalEventsManagerService) {
    this.globalEventsManager.loggedInNavBar.subscribe((data: boolean) => {
      this.loggedInNavBar = data;
    }, error => console.log(error));
  }

}
