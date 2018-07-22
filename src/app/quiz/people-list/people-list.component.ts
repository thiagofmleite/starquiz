import { Component, OnInit } from '@angular/core';
import { People } from './people/people';
import { FilmService } from './film/film.service';
import { config } from 'src/app/core/app.config';
import { SpecieService } from './specie/specie.service';
import { getFilmsFromPeople, getSpeciesFromPeople, getPlanetFromPeople, urlsReplaced, getVehiclesFromPeople } from './helpers';
import { PlanetService } from './planet/planet.service';
import { VehicleService } from './vehicle/vehicle.service';
import { ActivatedRoute } from '@angular/router';
import { PeopleResponse } from './people/people-response';

@Component({
    selector: 'app-people-list',
    templateUrl: './people-list.component.html',
})
export class PeopleListComponent implements OnInit {
    people: People;
    peoples: People[] = [];
    page: number = 1;
    response: PeopleResponse;

    constructor(
        private filmService: FilmService,
        private specieService: SpecieService,
        private planetService: PlanetService,
        private vehicleService: VehicleService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.page = this.activatedRoute.snapshot.params.userName || 1;
        this.response = this.activatedRoute.snapshot.data['response'];
        this.peoples = this.response.results;
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
