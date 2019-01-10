import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenSetsComponent } from './kitchen-sets.component';

describe('KitchenSetsComponent', () => {
  let component: KitchenSetsComponent;
  let fixture: ComponentFixture<KitchenSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
