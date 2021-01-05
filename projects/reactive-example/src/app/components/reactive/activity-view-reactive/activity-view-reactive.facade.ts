import { Injectable } from '@angular/core';
import { Activity } from '../../../models/activity.model';
import { State } from '../../../store/reducers';
import { SessionViewStore } from '../../session-view-store';
import { FirestoreService } from '../../../services/firestore.service';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';

export interface ActivityViewState {
    activity: Activity;
    isLoading: boolean;
}

export const initialActivityViewState = {
    activity: {} as Activity,
    isLoading: true
};

@Injectable()
export class ActivityViewReactiveFacade {

    vm$ = this.sessionViewStore.selectedActivityId$
        .pipe(
            switchMap((selectedActivityId) => {
                return !!selectedActivityId
                    ? this.firestoreService.getDocument<Activity>(`/activities/${selectedActivityId}`)
                    : of({} as Activity);
            }),
            map((activity) => {
                return {
                    activity,
                    isLoading: false
                };
            }),
            startWith(initialActivityViewState)
        );

    constructor(
        private store: Store<State>,
        private sessionViewStore: SessionViewStore,
        private firestoreService: FirestoreService
    ) {}

    updateName(name: string, activityId: string): void {
        this.firestoreService.updateDocument(`/activities/${activityId}`, { name });
    }

}
