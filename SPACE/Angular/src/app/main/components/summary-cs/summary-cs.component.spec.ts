import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCSComponent } from './summary-cs.component';

describe('SummaryCSComponent', () => {
  let component: SummaryCSComponent;
  let fixture: ComponentFixture<SummaryCSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryCSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryCSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
