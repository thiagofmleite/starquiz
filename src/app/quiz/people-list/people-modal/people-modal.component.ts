import { Component, OnInit, Input } from '@angular/core';
import { People } from '../people/people';
import { urlsReplaced } from '../helpers';
import { config } from 'src/app/core/app.config';

@Component({
    selector: 'app-people-modal',
    templateUrl: './people-modal.component.html',
})
export class PeopleModalComponent implements OnInit {
    @Input() people: People;
    noimage = 'assets/images/no-image.png';

    constructor() { }

    ngOnInit(): void { }

    getPlanet(): string {
        return urlsReplaced(config.PLANET_RULE, this.people.homeworld) ? null : this.people.homeworld;
    }

    listFilms(): string {
        return urlsReplaced(config.FILM_RULE, ...this.people.films) ? null : this.transmuteList(this.people.films);
    }

    listSpecies(): string {
        return urlsReplaced(config.SPECIE_RULE, ...this.people.species) ? null :  this.transmuteList(this.people.species);
    }

    listVehicles(): string {
        return urlsReplaced(config.VEHICLE_RULE, ...this.people.vehicles) ? null :  this.transmuteList(this.people.vehicles);
    }

    private transmuteList(list: string[], separator: string = ', '): string {
        return list.map(item => item).join(separator);
    }
}
