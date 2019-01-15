import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-summary-page',
  templateUrl: './billing-summary-page.component.html',
  styleUrls: ['./billing-summary-page.component.scss']
})
export class BillingSummaryPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  moveToTicket() {
    this.router.navigateByUrl('/ticket');
  }

}
