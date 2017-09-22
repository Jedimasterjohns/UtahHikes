import { Component, OnInit } from '@angular/core';
import { GlobalEventsManagerService } from '../_services/global-events-manager.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedInNavBar: boolean = false;

  constructor(private globalEventsManager: GlobalEventsManagerService) {
  }

  ngOnInit() {
    this.globalEventsManager.loggedInNavBar.subscribe((mode: any) => {
      return this.loggedInNavBar = mode;
    });
  }

}
