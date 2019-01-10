import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  moveToHomePage(){
   this.router.navigateByUrl('/home');
  }

}
