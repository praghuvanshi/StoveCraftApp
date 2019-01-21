import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Options } from 'ng5-slider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cook-weekends',
  templateUrl: './cook-weekends.component.html',
  styleUrls: ['./cook-weekends.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CookWeekendsComponent implements OnInit {

  constructor(private router: Router) { }

  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200
  };

  ngOnInit() {
  }

  moveToCookware() {
    this.router.navigateByUrl('/kitchenset');
  }
  moveToCompare() {
    this.router.navigateByUrl('/compareproducts');
  }
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
}
