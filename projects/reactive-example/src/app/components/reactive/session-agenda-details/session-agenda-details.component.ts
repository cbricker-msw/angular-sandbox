import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Session } from '../../../models/session.model';

@Component({
    selector: 'app-session-agenda-details',
    templateUrl: './session-agenda-details.component.html',
    styleUrls: [ './session-agenda-details.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionAgendaDetailsComponent {

    @Input() session!: Session;

    constructor() {
    }

}
