import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsoverviewComponent } from './csoverview.component';

describe('CsoverviewComponent', () => {
  let component: CsoverviewComponent;
  let fixture: ComponentFixture<CsoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsoverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
