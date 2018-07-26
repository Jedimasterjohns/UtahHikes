import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../_services/alert.service';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private authenticationService: AuthService) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

    register()  {
      this.loading = true;
      this.userService.create(this.model)
        .subscribe(
          data => {
            // set success message and pass true paramter to persist the message after redirecting to the login page
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/login']);
          },

          error =>  {
            this.alertService.error(error);
            this.loading = false;
          }
        );
        this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
          data => {
            this.promise(data);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          }
        );
    }

    private promise(data: any) {
      this.router.navigate([this.returnUrl]);
    }
}

