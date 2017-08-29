import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hike',
  templateUrl: './hike.component.html',
  styleUrls: ['./hike.component.css']
})
export class HikeComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

}
