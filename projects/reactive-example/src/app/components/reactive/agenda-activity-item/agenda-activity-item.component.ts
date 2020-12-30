import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Activity } from '../../../models/activity.model';

@Component({
    selector: 'app-agenda-activity-item',
    templateUrl: './agenda-activity-item.component.html',
    styleUrls: [ './agenda-activity-item.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgendaActivityItemComponent implements OnChanges {

    @Input() activity!: Activity;
    @Input() selectedActivityId!: string;
    @Output() selectActivity: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    onSelectActivity(id: string): void {
        this.selectActivity.emit(id);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(`${this.activity.name}::ngOnChanges`, changes);
    }

}
