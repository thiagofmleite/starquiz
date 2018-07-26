import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { calculateScore } from '../people-list/helpers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Quiz } from '../quiz';
import { Ranking } from '../ranking/ranking';
import { RankingService } from '../ranking/ranking.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
})
export class ResultComponent implements OnInit {
    score: number = 0;
    rankingForm: FormGroup;
    private quiz: Quiz;
    constructor(private router: Router, private quizService: QuizService, private formBuilder: FormBuilder, private rankingService: RankingService) { }

    ngOnInit(): void {
        this.rankingForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        })
        this.quiz = this.quizService.getQuiz();
        this.score = calculateScore(this.quiz);
        this.quiz.score = this.score;
     }

    submit() {
        const newRecord = this.rankingForm.getRawValue() as Ranking;
        newRecord.quiz = this.quiz;
        this.rankingService.saveRanking(newRecord);
        this.proceed();
    }

    proceed() {
        this.quizService.removeQuiz();
        this.router.navigate(['leaderboard']);
    }
}
