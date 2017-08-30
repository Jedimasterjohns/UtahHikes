import { Component } from '@angular/core';
import { 
  ActivatedRoute,
  Router
} from '@angular/router';

@Component({
  selector: 'app-hikes',
  templateUrl: './hikes.component.html',
  styleUrls: ['./hikes.component.css']
})
export class HikesComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  goToHike(id: string): void  {
    this.router.navigate(['./', id], {relativeTo: this.route});
  }

}
