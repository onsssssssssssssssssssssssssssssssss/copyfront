import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-suivijallon',
  templateUrl: './suivijallon.component.html',
  styleUrls: ['./suivijallon.component.css']
})
export class SuivijallonComponent implements OnInit {
  name: any;

  constructor(
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }
  

}
