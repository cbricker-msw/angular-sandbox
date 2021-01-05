import { Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from '../../../models/activity.model';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-activity-view',
    templateUrl: './activity-view.component.html',
    styleUrls: ['./activity-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityViewComponent implements OnInit, OnChanges {

    @Input() activity!: Activity;
    @Output() updateName = new EventEmitter<string>();

    name = new FormControl('');

    constructor() {
    }

    changeName(): void {
        this.updateName.emit(this.name.value);
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ActivityViewComponent::ngOnChanges', changes);
        if (changes['activity'] && !!this.activity) {
            this.name.setValue(this.activity.name);
        }
    }

}
