import { Component, ChangeDetectionStrategy, SimpleChanges, OnChanges } from '@angular/core';
import { ActivityViewReactiveFacade } from './activity-view-reactive.facade';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-activity-view-reactive',
    templateUrl: './activity-view-reactive.component.html',
    styleUrls: ['./activity-view-reactive.component.scss'],
    providers: [ ActivityViewReactiveFacade ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityViewReactiveComponent implements OnChanges {

    vm$  = this.facade.vm$
        .pipe(
            tap((viewModel) => {
                if (!!viewModel.activity) {
                    this.name.setValue(viewModel.activity.name);
                }
            })
        );

    name = new FormControl('');

    constructor(private facade: ActivityViewReactiveFacade) {
    }

    updateName(activityId: string): void {
        console.log('Name changed to ', this.name.value);
        this.facade.updateName(this.name.value, activityId);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ActivityViewReactiveComponent::ngOnChanges', changes);
    }

}
