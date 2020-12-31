import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Activity } from '../../../models/activity.model';

@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: [ './agenda.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgendaComponent implements OnInit, OnChanges {

    @Input() activities!: Activity[];
    @Input() selectedActivityId!: string;
    @Output() setSelectedActivity: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    onSelectActivity(activityId: string): void {
        this.setSelectedActivity.emit(activityId);
    }

    trackByActivities(index: number, activity: Activity): string {
        return activity.id || '';
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('AgendaComponent::ngOnChanges', changes);
        if (!!changes['activities'] && this.activities.length > 0 && !this.selectedActivityId) {
            this.setSelectedActivity.emit(this.activities[0].id);
        }
    }

}
