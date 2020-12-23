import { Component } from '@angular/core';
import { AppFacade } from './app-facade';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [AppFacade]
})
export class AppComponent {
    plate = '';
    vm$ = this.facade.vm$;

    constructor(private facade: AppFacade) {
    }

    onSubmit($event: Event): void {
        $event.preventDefault();
        this.facade.addCarToParkingLot(this.plate);
        this.plate = '';
    }

    addPlate($event: Event): void {
        const target = $event.target as HTMLButtonElement;
        if (target.nodeName === 'BUTTON') {
            this.plate = target.innerHTML;
        }
    }
}
