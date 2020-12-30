import { Component } from '@angular/core';
import { Session } from '../../models/session.model';
import { FirestoreService } from '../../services/firestore.service';
import { delay, startWith, map } from 'rxjs/operators';

@Component({
    selector: 'app-session-list',
    templateUrl: './session-list.component.html',
    styleUrls: [ './session-list.component.scss' ]
})
export class SessionListComponent {

    vm$ = this.firestoreService.getCollection<Session>('/sessions')
        .pipe(
            delay(1000),
            map((sessions) => ({ sessions, isLoading: false })),
            startWith({ sessions: [], isLoading: true })
        );

    constructor(private firestoreService: FirestoreService) {}

}
