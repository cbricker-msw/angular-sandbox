import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export interface SessionViewState {
    selectedActivityId: string;
}

@Injectable({
    providedIn: 'root'
})
export class SessionViewStore extends ComponentStore<SessionViewState> {

    constructor() {
        super({ selectedActivityId: '' });
    }

    // selectors
    readonly selectedActivityId$: Observable<string> = this.select(state => state.selectedActivityId);

    // updaters
    readonly setSelectedActivity = this.updater((state, activityId: string) => ({ selectedActivityId: activityId }));
}
