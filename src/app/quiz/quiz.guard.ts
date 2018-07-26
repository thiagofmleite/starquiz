import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { QuizService } from './quiz.service';

@Injectable({ providedIn: 'root' })
export class QuizGuard implements CanActivate {

    constructor(
        private service: QuizService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        
        const path = route.routeConfig.path;
        if (this.service.hasQuiz()) {
            if(this.service.isQuizTimeout() && path != 'finish') {
                this.router.navigate(['finish']);
                return false;
            }
            if(!this.service.isQuizTimeout() && path != 'finish') {
                this.router.navigate(['quiz']);
                return false;
            }
            if(this.service.isQuizTimeout() && path == 'finish') {
                return true;
            }
        }
        if(!this.service.hasQuiz() && path == 'finish') {
            return false;
        }
        return true;
    }
}
