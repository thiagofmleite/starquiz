import { Component, OnInit } from '@angular/core';
import { People } from './people/people';
import { PeopleService } from './people/people.service';
import { FilmService } from './film/film.service';
import { config } from 'src/app/core/app.config';
import { SpecieService } from './specie/specie.service';
import { getFilmsFromPeople, getSpeciesFromPeople, getPlanetFromPeople } from './helpers';
import { PlanetService } from './planet/planet.service';

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
        private specieService: SpecieService,
        private planetService: PlanetService,
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
        console.log(people);
        this.people = people;
        try {
            this.urlsReplaced(people.films, config.FILM_RULE)
            && getFilmsFromPeople(people, this.filmService);
            
            this.urlsReplaced(people.species, config.SPECIE_RULE)
            && getSpeciesFromPeople(people, this.specieService);
            
            this.urlsReplaced([people.homeworld], config.PLANET_RULE)
            && getPlanetFromPeople(people, this.planetService);

        } catch (error) {
            console.log(error.message);
        }

    }

    private urlsReplaced(urls: string[], rule: RegExp): boolean {
        return urls.some(url => rule.test(url));
    }

    


}
