import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customize-page',
  templateUrl: './customize-page.component.html',
  styleUrls: ['./customize-page.component.scss']
})
export class CustomizePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  moveToCart() {
    this.router.navigateByUrl('/cart');
  }

}
