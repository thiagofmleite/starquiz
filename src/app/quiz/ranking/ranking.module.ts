import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from './ranking.component';
import { SortPipe } from './sort-ranking.pipe';

@NgModule({
    declarations: [RankingComponent, SortPipe],
    imports: [ CommonModule ],
    exports: [RankingComponent],
    providers: [],
})
export class RankingModule {}