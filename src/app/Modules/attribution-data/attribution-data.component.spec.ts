import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributionDataComponent } from './attribution-data.component';

describe('AttributionDataComponent', () => {
  let component: AttributionDataComponent;
  let fixture: ComponentFixture<AttributionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributionDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
