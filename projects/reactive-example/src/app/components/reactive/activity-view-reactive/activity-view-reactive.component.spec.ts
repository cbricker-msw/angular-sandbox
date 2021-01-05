import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityViewReactiveComponent } from './activity-view-reactive.component';

describe('ActivityViewReactiveComponent', () => {
    let component: ActivityViewReactiveComponent;
    let fixture: ComponentFixture<ActivityViewReactiveComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ActivityViewReactiveComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ActivityViewReactiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
