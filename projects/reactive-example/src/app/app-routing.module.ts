import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionListComponent } from './components/session-list/session-list.component';
import { SessionViewReactiveComponent } from './components/reactive/session-view-reactive/session-view-reactive.component';
import { SessionViewContainerComponent } from './components/non-reactive/session-view-container/session-view-container.component';

const routes: Routes = [
    {
        path: '',
        component: SessionListComponent
    },
    {
        path: 'session-reactive/:sessionId',
        component: SessionViewReactiveComponent
    },
    {
        path: 'session/:sessionId',
        component: SessionViewContainerComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
