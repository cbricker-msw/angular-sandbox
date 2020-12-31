import { ChangeDetectionStrategy, Component, OnChanges, SimpleChanges } from '@angular/core';
import { SessionViewReactiveFacade } from './session-view-reactive.facade';

@Component({
    selector: 'app-session-view-reactive',
    templateUrl: './session-view-reactive.component.html',
    styleUrls: [ './session-view-reactive.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ SessionViewReactiveFacade ]
})
export class SessionViewReactiveComponent implements OnChanges {

    vm$ = this.facade.vm$;

    constructor(private facade: SessionViewReactiveFacade) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('SessionViewReactive::ngOnChanges', changes);
    }

}
