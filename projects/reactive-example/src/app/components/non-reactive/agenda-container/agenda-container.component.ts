import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../../../models/activity.model';

@Component({
    selector: 'app-agenda-container',
    templateUrl: './agenda-container.component.html',
    styleUrls: [ './agenda-container.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgendaContainerComponent implements OnInit, OnChanges {

    @Input() activities!: Activity[];
    @Input() selectedActivityId!: string;
    @Output() setSelectedActivity: EventEmitter<string> = new EventEmitter<string>();

    activities$!: Observable<Activity[]>;

    constructor() {
    }

    onSelectActivity(activityId: string): void {
        this.setSelectedActivity.emit(activityId);
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('AgendaContainerComponent::ngOnChanges', changes);
    }

}
