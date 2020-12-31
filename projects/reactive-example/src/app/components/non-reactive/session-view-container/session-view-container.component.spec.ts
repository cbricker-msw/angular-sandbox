import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionViewContainerComponent } from './session-view-container.component';

describe('SessionViewContainerComponent', () => {
  let component: SessionViewContainerComponent;
  let fixture: ComponentFixture<SessionViewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionViewContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
