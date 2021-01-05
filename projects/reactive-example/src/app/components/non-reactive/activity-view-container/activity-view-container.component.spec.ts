import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityViewContainerComponent } from './activity-view-container.component';

describe('ActivityViewContainerComponent', () => {
  let component: ActivityViewContainerComponent;
  let fixture: ComponentFixture<ActivityViewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityViewContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
