import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { AgendaReactiveFacade } from './agenda-reactive.facade';
import { Activity } from '../../../models/activity.model';

@Component({
    selector: 'app-agenda-reactive',
    templateUrl: './agenda-reactive.component.html',
    styleUrls: [ './agenda-reactive.component.scss' ],
    providers: [ AgendaReactiveFacade ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgendaReactiveComponent implements OnDestroy {

    vm$ = this.facade.vm$;

    constructor(private facade: AgendaReactiveFacade) {
    }

    trackByActivities(index: number, activity: Activity): string {
        return activity.id || '';
    }

    onSelectActivity(activityId: string): void {
        this.facade.setSelectedActivity(activityId);
    }

    ngOnDestroy(): void {
        this.facade.setSelectedActivity('');
    }

}
