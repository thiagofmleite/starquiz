import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { People } from './people/people';
import { FilmService } from './film/film.service';
import { config } from 'src/app/core/app.config';
import { SpecieService } from './specie/specie.service';
import { getFilmsFromPeople, getSpeciesFromPeople, getPlanetFromPeople, urlsReplaced, getVehiclesFromPeople } from './helpers';
import { PlanetService } from './planet/planet.service';
import { VehicleService } from './vehicle/vehicle.service';
import { ActivatedRoute } from '@angular/router';
import { PeopleResponse } from './people/people-response';
import { ImageService } from './image/image.service';
import { PeopleService } from './people/people.service';

@Component({
    selector: 'app-people-list',
    templateUrl: './people-list.component.html',
})
export class PeopleListComponent implements OnInit, OnChanges {
    people: People;
    peoples: People[] = [];
    page: number = 1;
    response: PeopleResponse;
    images: string[] = [];

    constructor(
        private service: PeopleService,
        private filmService: FilmService,
        private specieService: SpecieService,
        private planetService: PlanetService,
        private vehicleService: VehicleService,
        private imageService: ImageService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(val => {
            this.page = this.activatedRoute.snapshot.params['page'];
            this.service.getPeople(this.page)
                .subscribe(response => {
                    this.response = response;
                    this.peoples = this.response.results;
                    this.getImages(this.peoples);
                }, err => console.log(err));
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        if (changes.page) {
            console.log(this.response.results);
        }

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

    private getImages(peoples: People[]) {
        const requests$ = peoples.map(people => this.imageService.getImages(encodeURI(people.name.toLowerCase())));
        this.images = [];
        requests$.map(req => req.subscribe(
            response => {
                console.info('RESPONSE ABAIXO');
                console.log(response);
            },
            error => {
                console.info('DEU RUIM');
                console.log(error);
            }
        ));
    }

    getImageFor(people: People): string {
        return this.images[people.name];
    }

}
