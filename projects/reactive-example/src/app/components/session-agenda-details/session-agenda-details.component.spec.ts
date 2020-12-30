import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionAgendaDetailsComponent } from './session-agenda-details.component';

describe('SessionAgendaDetailsComponent', () => {
    let component: SessionAgendaDetailsComponent;
    let fixture: ComponentFixture<SessionAgendaDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SessionAgendaDetailsComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionAgendaDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
