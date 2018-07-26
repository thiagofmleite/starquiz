import { NgModule } from "@angular/core";
import { PeopleListModule } from "./people-list/people-list.module";
import { ResultModule } from "./result/result.module";
import { RankingModule } from "./ranking/ranking.module";

@NgModule({
    declarations: [],
    imports: [PeopleListModule, ResultModule, RankingModule]
})
export class QuizModule { }