import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FirestoreService } from '../../../services/firestore.service';
import { getSessionId, State } from '../../../store/reducers';
import { Activity } from '../../../models/activity.model';
import { map, startWith, switchMap } from 'rxjs/operators';
import { combineLatest, Observable, of } from 'rxjs';
import { SessionViewStore } from '../../session-view-store';

export interface AgendaState {
    activities: Activity[];
    selectedActivityId: string;
    isLoading: boolean;
}

export const initialAgendaState = {
    activities: [],
    selectedActivityId: '',
    isLoading: true
};

@Injectable()
export class AgendaReactiveFacade {

    vm$ = this.buildViewModel();

    constructor(
        private store: Store<State>,
        private sessionViewStore: SessionViewStore,
        private firestoreService: FirestoreService
    ) {}

    setSelectedActivity(activityId: string): void {
        this.sessionViewStore.setSelectedActivity(activityId);
    }

    private buildViewModel(): Observable<AgendaState> {
        return this.store.select(getSessionId)
            .pipe(
                switchMap((sessionId) => {
                    const sessionActivities$ = !!sessionId
                        ? this.firestoreService.getDocumentsByProperty<Activity>('/activities', 'session_id', sessionId)
                            .pipe(
                                map((activities) => activities.sort(this.sortActivitiesBySequence))
                            )
                        : of([]);

                    return combineLatest([
                        sessionActivities$,
                        this.sessionViewStore.selectedActivityId$
                    ])
                        .pipe(
                            map(([activities, selectedActivityId]) => {
                                const currentSelectedActivityId = !!selectedActivityId ? selectedActivityId : activities[0]?.id || '';
                                if (!selectedActivityId) {
                                    this.setSelectedActivity(currentSelectedActivityId);
                                }
                                return {
                                    activities,
                                    selectedActivityId: currentSelectedActivityId,
                                    isLoading: false
                                };
                            }),
                        );
                }),
                startWith(initialAgendaState)
            );
    }

    private sortActivitiesBySequence(a: Activity, b: Activity): number {
        return (a.sequence ?? 0) - (b.sequence ?? 0);
    }

}
