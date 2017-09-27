import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';

import { AlertService } from '../_services/alert.service';
import { AuthService } from '../_services/auth.service';
import { GlobalEventsManagerService } from '../_services/global-events-manager.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private alertService: AlertService,
    private globalEventsManager: GlobalEventsManagerService) { }

  ngOnInit() {
    //reset login status
    this.authenticationService.logout();

    //get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
    .subscribe(
      data => {
        this.promise(data); 
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    )
  }

  private promise(data: any) {
    this.globalEventsManager.loggedInNavBar.emit(true);
    this.router.navigate([this.returnUrl])
  }

}
