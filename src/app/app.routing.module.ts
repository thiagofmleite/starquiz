import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './quiz/people-list/people-list.component';
import { HomeComponent } from './home/home.component';
import { QuizGuard } from './quiz/quiz.guard';
import { ResultComponent } from './quiz/result/result.component';
import { ResultGuard } from './quiz/result/result.guard';
import { RankingComponent } from './quiz/ranking/ranking.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [QuizGuard],
    },
    {
        path: 'quiz',
        component: PeopleListComponent,
        canActivate: [ResultGuard],
    },
    {
        path: 'quiz/:page',
        component: PeopleListComponent,
        canActivate: [ResultGuard],
    },
    {
        path: 'finish',
        component: ResultComponent,
        canActivate: [QuizGuard],
    },
    {
        path: 'leaderboard',
        component: RankingComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }