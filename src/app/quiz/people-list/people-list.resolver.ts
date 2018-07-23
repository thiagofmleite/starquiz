import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PeopleResponse } from './people/people-response';
import { PeopleService } from './people/people.service';

@Injectable({ providedIn: 'root' })
export class PeopleListResolver implements Resolve<Observable<PeopleResponse>> {
    constructor(private service: PeopleService) { }

    resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PeopleResponse> {
        const page = router.params.page;
        console.log(router.params.page);
        return this.service.getPeople(page);
    }
}
