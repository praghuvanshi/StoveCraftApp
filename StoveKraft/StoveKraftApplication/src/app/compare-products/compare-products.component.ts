import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-compare-products',
  templateUrl: './compare-products.component.html',
  styleUrls: ['./compare-products.component.scss']
})
export class CompareProductsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  moveToCookware() {
    this.router.navigateByUrl('/kitchenset');
  }

}
