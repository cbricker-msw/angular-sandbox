import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Session } from '../../../models/session.model';
import { Activity } from '../../../models/activity.model';

@Component({
    selector: 'app-session-view',
    templateUrl: './session-view.component.html',
    styleUrls: [ './session-view.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionViewComponent implements OnInit, OnChanges {

    @Input() session!: Session | null;
    @Input() activities!: Activity[];
    @Input() selectedActivityId!: string;
    @Output() setSelectedActivity: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    onSelectActivity(activityId: string): void {
        this.setSelectedActivity.emit(activityId);
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('SessionViewComponent::ngOnChanges', changes);
    }

}
