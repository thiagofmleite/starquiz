import { Pipe, PipeTransform } from '@angular/core';
import { Ranking } from './ranking';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
    transform(array: Ranking[]): Ranking[] {
        return array.sort((a, b) => {
            if (a.quiz.score > b.quiz.score) {
                return -1;
            } else if (a.quiz.score < b.quiz.score) {
                return 1;
            } else {
                return 0;
            }
        });
    }
}