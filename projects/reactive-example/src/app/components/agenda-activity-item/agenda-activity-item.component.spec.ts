import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaActivityItemComponent } from './agenda-activity-item.component';

describe('AgendaActivityItemComponent', () => {
    let component: AgendaActivityItemComponent;
    let fixture: ComponentFixture<AgendaActivityItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ AgendaActivityItemComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AgendaActivityItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
