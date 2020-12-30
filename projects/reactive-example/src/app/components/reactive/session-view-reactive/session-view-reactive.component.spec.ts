import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionViewReactiveComponent } from './session-view-reactive.component';

describe('SessionViewReactiveComponent', () => {
    let component: SessionViewReactiveComponent;
    let fixture: ComponentFixture<SessionViewReactiveComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SessionViewReactiveComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionViewReactiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
