import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './quiz/people-list/people-list.component';
import { PeopleListResolver } from './quiz/people-list/people-list.resolver';

const routes: Routes = [
    {
        path: '',
        component: PeopleListComponent,
        resolve: {
            response: PeopleListResolver
        }
    },
    {
        path: ':page',
        component: PeopleListComponent,
        resolve: {
            response: PeopleListResolver
        }
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }