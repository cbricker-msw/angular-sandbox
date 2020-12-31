import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { StoreModule } from '@ngrx/store';
import { routerReducer, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { CustomSerializer } from './store/reducers';
import { SessionListComponent } from './components/session-list/session-list.component';
import { SessionViewReactiveComponent } from './components/reactive/session-view-reactive/session-view-reactive.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SessionAgendaDetailsComponent } from './components/session-agenda-details/session-agenda-details.component';
import { AgendaReactiveComponent } from './components/reactive/agenda-reactive/agenda-reactive.component';
import { AgendaActivityItemComponent } from './components/agenda-activity-item/agenda-activity-item.component';
import { SessionViewContainerComponent } from './components/non-reactive/session-view-container/session-view-container.component';
import { SessionViewComponent } from './components/non-reactive/session-view/session-view.component';
import { AgendaContainerComponent } from './components/non-reactive/agenda-container/agenda-container.component';
import { AgendaComponent } from './components/non-reactive/agenda/agenda.component';

@NgModule({
    declarations: [
        AppComponent,
        SessionListComponent,
        SessionViewReactiveComponent,
        SessionAgendaDetailsComponent,
        AgendaReactiveComponent,
        AgendaActivityItemComponent,
        SessionViewContainerComponent,
        SessionViewComponent,
        AgendaContainerComponent,
        AgendaComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        StoreModule.forRoot({
            router: routerReducer
        }),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument(),
        BrowserAnimationsModule,

        // Material Modules
        MatSidenavModule,

    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomSerializer }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
