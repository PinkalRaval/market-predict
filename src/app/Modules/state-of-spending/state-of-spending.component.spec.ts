import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateOfSpendingComponent } from './state-of-spending.component';

describe('StateOfSpendingComponent', () => {
  let component: StateOfSpendingComponent;
  let fixture: ComponentFixture<StateOfSpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateOfSpendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateOfSpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
