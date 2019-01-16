import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookWeekendsComponent } from './cook-weekends.component';

describe('CookWeekendsComponent', () => {
  let component: CookWeekendsComponent;
  let fixture: ComponentFixture<CookWeekendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookWeekendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookWeekendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
