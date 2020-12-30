import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionListComponent } from './components/session-list/session-list.component';
import { SessionViewReactiveComponent } from './components/reactive/session-view-reactive/session-view-reactive.component';

const routes: Routes = [
    {
        path: '',
        component: SessionListComponent
    },
    {
        path: 'session/:sessionId',
        component: SessionViewReactiveComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
