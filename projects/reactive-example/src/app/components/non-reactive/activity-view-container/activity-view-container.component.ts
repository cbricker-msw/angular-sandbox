import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';
import { Observable } from 'rxjs';
import { Activity } from '../../../models/activity.model';

@Component({
    selector: 'app-activity-view-container',
    templateUrl: './activity-view-container.component.html',
    styleUrls: ['./activity-view-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityViewContainerComponent implements OnInit, OnChanges {

    @Input() selectedActivityId!: string;

    activity$!: Observable<Activity | null>;

    constructor(private firestoreService: FirestoreService) {
    }

    onUpdateName(name: string): void {
        this.firestoreService.updateDocument(`/activities/${this.selectedActivityId}`, { name });
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ActivityViewContainerComponent::ngOnChanges', changes);
        if (changes['selectedActivityId'] && !!this.selectedActivityId) {
            this.activity$ = this.firestoreService.getDocument<Activity>(`/activities/${this.selectedActivityId}`);
        }
    }

}
