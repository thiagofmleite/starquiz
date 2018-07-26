import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../quiz/quiz.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    constructor(private quizService: QuizService) { }

    ngOnInit(): void { }

    hasQuiz(): boolean {
        return this.quizService.hasQuiz();
    }
}
