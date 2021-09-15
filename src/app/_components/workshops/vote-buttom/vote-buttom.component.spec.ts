import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteButtomComponent } from './vote-buttom.component';

describe('VoteButtomComponent', () => {
  let component: VoteButtomComponent;
  let fixture: ComponentFixture<VoteButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteButtomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
