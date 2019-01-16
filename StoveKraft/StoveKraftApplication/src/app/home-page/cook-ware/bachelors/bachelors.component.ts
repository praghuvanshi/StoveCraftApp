import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bachelors',
  templateUrl: './bachelors.component.html',
  styleUrls: ['./bachelors.component.scss']
})
export class BachelorsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moveToCookware() {
    this.router.navigateByUrl('/kitchenset');
  }

  getCookOnWeekends() {
    this.router.navigateByUrl('/cookonweekend');
  }
}
