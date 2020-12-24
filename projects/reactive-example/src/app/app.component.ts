import { Component } from '@angular/core';
import {FirestoreService} from './services/firestore.service';
import {Session} from './models/session.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'reactive-example';
    sessions$ = this.firestoreService.getCollection<Session>('/sessions');

    constructor(private firestoreService: FirestoreService) {}

}
