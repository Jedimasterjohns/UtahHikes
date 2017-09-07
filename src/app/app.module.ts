import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootrstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HikesComponent } from './hikes/hikes.component';
import { ProtectedComponent } from './protected/protected.component';

import {
  routes as childRoutes,
  HikesModule
} from './hikes/hikes.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GlobalEventsManagerService } from './global-events-manager.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // authentication demo
  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ LoggedInGuard ]
  },

  // nested
  {
    path: 'hikes',
    component: HikesComponent,
    children: childRoutes
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProtectedComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HikesModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes) // <-- routes
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
