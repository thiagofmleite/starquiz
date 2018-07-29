import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../quiz/quiz.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
})
export class TimerComponent implements OnInit {
    constructor(private quizService: QuizService, private router: Router) { }
    timer: string = '00:00';

    ngOnInit(): void {
        const quiz = this.quizService.getQuiz();
        const finish = new Date(quiz.finish).getTime();
        const intervalId = window.setInterval(() => {
            const diff = finish - new Date().getTime();
            if (diff < 0) {
                window.clearInterval(intervalId);
                this.router.navigate(['finish']);
            }
            this.timer = this.getTimer(diff);
        }, 1000);
    }

    getSeconds(time: number): string {
        if (time < 0) {
            return '00';
        }
        const seconds = ((time / 1000) % 60);
        return (seconds < 10) ? `0${seconds.toFixed(0)}` : seconds.toFixed(0);
    }

    getMinutes(time: number): string {
        if (time < 0) {
            return '00';
        }
        const minutes = Math.floor((time / 1000) / 60);
        return (minutes < 10) ? `0${minutes.toFixed(0)}` : minutes.toFixed(0);
    }

    getTimer(time: number): string {
        console.log(time);
        return `${this.getMinutes(time)}:${this.getSeconds(time)}`;
    }

}
