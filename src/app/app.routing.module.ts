import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './quiz/people-list/people-list.component';
import { PeopleListResolver } from './quiz/people-list/people-list.resolver';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'quiz'
    },
    {
        path: 'quiz',
        component: PeopleListComponent,
    },
    {
        path: 'quiz/:page',
        component: PeopleListComponent,
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }