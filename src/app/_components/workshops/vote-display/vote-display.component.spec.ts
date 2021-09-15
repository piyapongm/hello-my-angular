import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteDisplayComponent } from './vote-display.component';

describe('VoteDisplayComponent', () => {
  let component: VoteDisplayComponent;
  let fixture: ComponentFixture<VoteDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
