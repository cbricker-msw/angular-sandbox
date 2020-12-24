import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSessionId, State } from '../../store/reducers';
import { FirestoreService } from '../../services/firestore.service';
import { map, startWith, switchMap } from 'rxjs/operators';
import { Session } from '../../models/session.model';

export interface SessionState {
    session: Session;
    isLoading: boolean;
}

export const initialSessionState = {
    session: {} as Session,
    isLoading: true
};

@Injectable()
export class SessionReactiveFacade {
    vm$ = this.store.select(getSessionId)
        .pipe(
            switchMap((sessionId) => {
                return this.firestoreService.getDocument<Session>(`/sessions/${sessionId}`);
            }),
            map((session) => {
                return {
                    session,
                    isLoading: false
                };
            }),
            startWith(initialSessionState)
        );

    constructor(private store: Store<State>, private firestoreService: FirestoreService) {}

}
