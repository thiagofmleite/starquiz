import { Component, OnInit } from '@angular/core';
import { People } from './people/people';
import { PeopleService } from './people/people.service';
import { FilmService } from './film/film.service';
import { config } from 'src/app/core/app.config';
import { SpecieService } from './specie/specie.service';
import { getFilmsFromPeople, getSpeciesFromPeople, getPlanetFromPeople, urlsReplaced, getVehiclesFromPeople } from './helpers';
import { PlanetService } from './planet/planet.service';
import { Vehicle } from './vehicle/vehicle';
import { VehicleService } from './vehicle/vehicle.service';

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
        private vehicleService: VehicleService,
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
            this.retriveData(people);
        } catch (error) {
            console.log(error.message);
        }

    }

    private retriveData(people: People): void {
        urlsReplaced(config.FILM_RULE, ...people.films)
            && getFilmsFromPeople(people, this.filmService);

        urlsReplaced(config.SPECIE_RULE, ...people.species)
            && getSpeciesFromPeople(people, this.specieService);

        urlsReplaced(config.PLANET_RULE, people.homeworld)
            && getPlanetFromPeople(people, this.planetService);

        urlsReplaced(config.VEHICLE_RULE, ...people.vehicles)
            && getVehiclesFromPeople(people, this.vehicleService);
    }
}
