import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';

import { HikesComponent } from './hikes.component';
import { HikeComponent } from './hike/hike.component';
import { MainComponent } from './main/main.component';
import { MoreInfoComponent } from './more-info/more-info.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'more-info', component: MoreInfoComponent },
  { path: ':id', component: HikeComponent },
];

@NgModule({
  declarations: [
    HikesComponent,
    HikeComponent,
    MainComponent,
    MoreInfoComponent
  ],
  exports: [
    HikesComponent,
    HikeComponent,
    MainComponent,
    MoreInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HikesModule { }
