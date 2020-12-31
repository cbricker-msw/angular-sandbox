import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Session } from '../../../models/session.model';
import { FirestoreService } from '../../../services/firestore.service';
import { Store } from '@ngrx/store';
import { getSessionId, State } from '../../../store/reducers';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Activity } from '../../../models/activity.model';
import { map, tap } from 'rxjs/operators';

@UntilDestroy()
@Component({
    selector: 'app-session-view-container',
    templateUrl: './session-view-container.component.html',
    styleUrls: [ './session-view-container.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionViewContainerComponent implements OnInit, OnChanges {

    session$!: Observable<Session | null>;
    activities$!: Observable<Activity[]>;
    selectedActivityIdSubject = new BehaviorSubject<string>('');

    constructor(private store: Store<State>, private firestoreService: FirestoreService) {
    }

    onSelectActivity(activityId: string): void {
        this.selectedActivityIdSubject.next(activityId);
    }

    ngOnInit(): void {
        this.store.select(getSessionId)
            .pipe(
                untilDestroyed(this)
            )
            .subscribe((sessionId) => {
                this.session$ = this.firestoreService.getDocument<Session>(`/sessions/${sessionId}`);
                this.activities$ = !!sessionId
                    ? this.firestoreService.getDocumentsByProperty<Activity>('/activities', 'session_id', sessionId)
                        .pipe(
                            map((activities) => activities.sort(this.sortActivitiesBySequence)),
                            tap((activities) => {
                                if (!!this.selectedActivityIdSubject.getValue() && activities.length > 0) {
                                    this.selectedActivityIdSubject.next(activities[0].id || '');
                                }
                            })
                        )
                    : of([]);
            });
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('SessionViewContainerComponent::ngOnChanges', changes);
    }

    private sortActivitiesBySequence(a: Activity, b: Activity): number {
        return (a.sequence ?? 0) - (b.sequence ?? 0);
    }
}
