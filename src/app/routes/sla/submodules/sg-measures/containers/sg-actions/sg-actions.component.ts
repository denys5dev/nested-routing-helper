import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sg-actions',
  templateUrl: './sg-actions.component.html',
  styleUrls: ['./sg-actions.component.css'],
})
export class SgActionsComponent implements OnInit {
  routeParams$: Observable<any> = this.route.params;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
