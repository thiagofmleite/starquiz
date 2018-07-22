import { Component, OnInit, Input } from '@angular/core';
import { People } from '../people/people';

@Component({
    selector: 'app-people-modal',
    templateUrl: './people-modal.component.html',
})
export class PeopleModalComponent implements OnInit {
    @Input() people: People;

    constructor() { }

    ngOnInit(): void { }

    getPlanet(): string {
        return this.people.homeworld;
    }

    listFilms(): string {
        return this.transmuteList(this.people.films);
    }

    listSpecies(): string {
        return this.transmuteList(this.people.species);
    }



    private transmuteList(list: string[], separator: string = ', '): string {
        return list.map(item => item).join(separator);
    }
}
