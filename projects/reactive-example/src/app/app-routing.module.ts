import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionReactiveComponent } from './components/session-reactive/session-reactive.component';

const routes: Routes = [
    {
        path: 'session/:sessionId',
        component: SessionReactiveComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
