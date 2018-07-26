import { Component, OnInit } from '@angular/core';
import { createSessionId } from '../core/helpers/create-session-id';
import { Quiz } from '../quiz/quiz';
import { QuizService } from '../quiz/quiz.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(private quizService: QuizService, private router: Router) { }

    ngOnInit(): void { }

    newGame() {
        const sessionId = createSessionId();
        const quiz = new Quiz(sessionId);
        this.quizService.setQuiz(quiz);
        this.router.navigate(['quiz']);
    }
}
