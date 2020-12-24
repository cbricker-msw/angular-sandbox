import { Component } from '@angular/core';
import { SessionReactiveFacade } from './session-reactive.facade';

@Component({
    selector: 'app-session-reactive',
    templateUrl: './session-reactive.component.html',
    styleUrls: [ './session-reactive.component.scss' ],
    providers: [ SessionReactiveFacade ]
})
export class SessionReactiveComponent {
    vm$ = this.facade.vm$;

    constructor(private facade: SessionReactiveFacade) {
    }

}
