import { Component, OnInit } from '@angular/core';
import { createSessionId } from '../core/helpers/create-session-id';
import { Survey } from '../quiz/survey/survey';
import { SurveyService } from '../quiz/survey/helpers/survey.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(private surveyService: SurveyService, private router: Router) { }

    ngOnInit(): void { }

    newGame() {
        const sessionId = createSessionId();
        const survey = new Survey(sessionId);
        this.surveyService.setSurvey(survey);
        this.router.navigate(['quiz']);
    }
}
