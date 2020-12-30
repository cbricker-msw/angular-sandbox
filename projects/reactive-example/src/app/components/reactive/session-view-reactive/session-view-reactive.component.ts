import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SessionViewReactiveFacade } from './session-view-reactive.facade';

@Component({
    selector: 'app-session-view-reactive',
    templateUrl: './session-view-reactive.component.html',
    styleUrls: [ './session-view-reactive.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ SessionViewReactiveFacade ]
})
export class SessionViewReactiveComponent {

    vm$ = this.facade.vm$;

    constructor(private facade: SessionViewReactiveFacade) {
    }

}
