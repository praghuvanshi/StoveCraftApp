import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingSummaryPageComponent } from './billing-summary-page.component';

describe('BillingSummaryPageComponent', () => {
  let component: BillingSummaryPageComponent;
  let fixture: ComponentFixture<BillingSummaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingSummaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
