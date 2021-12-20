import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeDashboardComponent } from './creative-dashboard.component';

describe('CreativeDashboardComponent', () => {
  let component: CreativeDashboardComponent;
  let fixture: ComponentFixture<CreativeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreativeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
