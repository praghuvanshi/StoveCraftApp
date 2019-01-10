import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookWareComponent } from './cook-ware.component';

describe('CookWareComponent', () => {
  let component: CookWareComponent;
  let fixture: ComponentFixture<CookWareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookWareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookWareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
