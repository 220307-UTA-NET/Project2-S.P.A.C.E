import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengescsComponent } from './challengescs.component';

describe('ChallengescsComponent', () => {
  let component: ChallengescsComponent;
  let fixture: ComponentFixture<ChallengescsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengescsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengescsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
