import { Component, OnInit } from '@angular/core';
import { People } from './people/people';
import { PeopleService } from './people/people.service';
import { FilmService } from './film/film.service';
import { Observable } from 'rxjs';
import { Film } from './film/film';

@Component({
    selector: 'app-people-list',
    templateUrl: './people-list.component.html',
})
export class PeopleListComponent implements OnInit {
    people: People;
    peoples: People[] = [];

    constructor(
        private peopleService: PeopleService,
        private filmService: FilmService,
    ) { }

    ngOnInit(): void {
        this.peopleService.getPeople()
            .subscribe(
                response => {
                    this.peoples = response.results;
                },
                error => console.log(error)
            );
    }
    
    getPeopleInfo(people: People) {
        this.people = people;
        try {
            this.getFilmsFromPeople(people)
                .map(req => req.subscribe(
                    film => this.people.films.push(film.title),
                    error => console.log(error)
                ));
        } catch (error) {
            console.log(error.message);
        }

    }

    getFilmsFromPeople(people: People): Observable<Film>[] {
        const requests$ = people.films.map(api => this.filmService.getFilm(api));
        people.films = []
        return requests$;
    }


}
