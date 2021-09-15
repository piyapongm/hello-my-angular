import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteScoreComponent } from './vote-score.component';

describe('VoteScoreComponent', () => {
  let component: VoteScoreComponent;
  let fixture: ComponentFixture<VoteScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
