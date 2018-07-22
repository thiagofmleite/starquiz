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

    listFilms(): string {
        return this.people.films.map(film => film).join(', ');
    }
}
