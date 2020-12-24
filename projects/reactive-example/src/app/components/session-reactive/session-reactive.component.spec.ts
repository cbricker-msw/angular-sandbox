import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionReactiveComponent } from './session-reactive.component';

describe('SessionReactiveComponent', () => {
    let component: SessionReactiveComponent;
    let fixture: ComponentFixture<SessionReactiveComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SessionReactiveComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionReactiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
