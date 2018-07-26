import { Injectable } from '@angular/core';
import { Survey } from '../survey';

@Injectable({ providedIn: 'root' })
export class SurveyService {
    hasSurvey(): boolean {
        return !! this.getSurvey();
    }

    setSurvey(survey: Survey): void {
        window.localStorage.setItem('survey', survey.sessionId);
        window.localStorage.setItem(survey.sessionId, JSON.stringify(survey));
    }

    getSurvey(sessionId: string = null): Survey {
        sessionId = sessionId || window.localStorage.getItem('survey');
        const survey =  JSON.parse(window.localStorage.getItem(sessionId)) as Survey;
        return survey;
    }
}
