import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { QuizService } from '../quiz.service';

@Injectable({ providedIn: 'root' })
export class ResultGuard implements CanActivate {

    constructor(
        private service: QuizService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        if (this.service.hasQuiz() && this.service.isQuizTimeout()) {
            this.router.navigate(['finish']);
            return false;
        }
        if(!this.service.hasQuiz()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}
