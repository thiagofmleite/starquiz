import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { People } from './people';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
})
export class PeopleComponent implements OnInit {
    @Input() people: People;
    @Output() peopleInfo = new EventEmitter<People>();
    constructor() { }

    ngOnInit(): void { }
}
