import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-cook-weekends',
  templateUrl: './cook-weekends.component.html',
  styleUrls: ['./cook-weekends.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CookWeekendsComponent implements OnInit {

  constructor() { }

  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200
  };

  ngOnInit() {
  }
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
}
