import { Injectable } from '@angular/core';
import { Ranking } from './ranking';

@Injectable({ providedIn: 'root' })
export class RankingService {

    getLeaderboard(): Ranking[] {
        const leaderboard =  JSON.parse(window.localStorage.getItem('leaderboard')) as Ranking[];
        return leaderboard || [];
    }
    
    saveRanking(ranking: Ranking): void {
        let leaderboard = this.getLeaderboard()
        leaderboard.push(ranking);
        window.localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    }
}
