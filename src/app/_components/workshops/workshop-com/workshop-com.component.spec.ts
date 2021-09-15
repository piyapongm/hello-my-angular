import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopComComponent } from './workshop-com.component';

describe('WorkshopComComponent', () => {
  let component: WorkshopComComponent;
  let fixture: ComponentFixture<WorkshopComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
