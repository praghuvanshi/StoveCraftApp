import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-kitchen-sets',
  templateUrl: './kitchen-sets.component.html',
  styleUrls: ['./kitchen-sets.component.scss']
})
export class KitchenSetsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  getBachelorsChoice(){
    this.router.navigateByUrl('/bachelor');
   }


}
