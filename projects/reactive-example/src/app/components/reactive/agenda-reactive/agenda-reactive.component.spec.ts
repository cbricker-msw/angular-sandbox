import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaReactiveComponent } from './agenda-reactive.component';

describe('AgendaReactiveComponent', () => {
    let component: AgendaReactiveComponent;
    let fixture: ComponentFixture<AgendaReactiveComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ AgendaReactiveComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AgendaReactiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
