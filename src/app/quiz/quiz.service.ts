import { Injectable } from '@angular/core';
import { Quiz } from './quiz';

@Injectable({ providedIn: 'root' })
export class QuizService {
    hasQuiz(): boolean {
        return !! this.getQuiz();
    }

    setQuiz(quiz: Quiz): void {
        window.localStorage.setItem('quiz', quiz.sessionId);
        window.localStorage.setItem(quiz.sessionId, JSON.stringify(quiz));
    }

    getQuiz(sessionId: string = null): Quiz {
        sessionId = sessionId || window.localStorage.getItem('quiz');
        const quiz =  JSON.parse(window.localStorage.getItem(sessionId)) as Quiz;
        return quiz;
    }

    isQuizTimeout(): boolean {
        let quiz = this.getQuiz();
        const now = new Date();
        return (new Date(quiz.finish) < now);
    }

    removeQuiz(): void {
        window.localStorage.removeItem('quiz');
    }
}
