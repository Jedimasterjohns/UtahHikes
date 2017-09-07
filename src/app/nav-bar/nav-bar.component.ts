import { Component, OnInit } from '@angular/core';
import { GlobalEventsManagerService } from '../global-events-manager.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  showNavBar : boolean = false;

  constructor(private globalEventsManager: GlobalEventsManagerService) { 
    this.globalEventsManager.showNavBarEmitter.subscribe((mode) => {
      // mode will be null the first time it is created, so you need to ignore it when null
      if (mode !== null){
        this.showNavBar = mode;
      }
    });
  }

  ngOnInit() {
  }

}
