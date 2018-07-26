import { Component, OnInit } from '@angular/core';
import { RankingService } from './ranking.service';
import { Ranking } from './ranking';

@Component({
    selector: 'app-ranking',
    templateUrl: './ranking.component.html',
})
export class RankingComponent implements OnInit {
    rankings: Ranking[] = [];
    constructor(private service: RankingService) { }

    ngOnInit(): void { 
        this.rankings = this.service.getLeaderboard();
        console.log(this.rankings)
    }
}
